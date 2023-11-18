## Estandarizar Tamaño

```python
from PIL import Image
import os

input_dir = '.\datasets\A'
output_dir = '.\datasets\Squared'

os.makedirs(output_dir, exist_ok=True)
target_size = (128, 128)

input_files = os.listdir(input_dir)

for input_file in input_files:
    input_path = os.path.join(input_dir, input_file)
    output_path = os.path.join(output_dir, input_file)
    
    img = Image.open(input_path)
    
    width, height = img.size
    size = min(width, height)
    
    # Calculate the coordinates for the square crop
    left = (width - size) / 2
    upper = (height - size) / 2
    right = (width + size) / 2
    lower = (height + size) / 2
    
    square_img = img.crop((left, upper, right, lower))
    
    # Resize the image to the target size while maintaining aspect ratio
    square_img.thumbnail(target_size)
    
    # Create a new square image with a white background
    small_img = Image.new('RGB', target_size, (255, 255, 255))
    
    # Paste the resized image onto the square canvas
    offset = ((target_size[0] - square_img.width) // 2, (target_size[1] - square_img.height) // 2)
    small_img.paste(square_img, offset)
    
    small_img.save(output_path)

print(f"Images saved to '{output_dir}'")
```

## Aplicar Filtros  

```python
from PIL import Image
import os
import cv2

input_dir = '.\datasets\Squared'
output_dir = '.\datasets\Filtered'

os.makedirs(output_dir, exist_ok=True)

input_files = os.listdir(input_dir)

for input_file in input_files:
    input_path = os.path.join(input_dir, input_file)
    output_path_original = os.path.join(output_dir, input_file)

    try:
        img = Image.open(input_path)
    except Exception as e:
        print(f"Error processing {input_file}: {str(e)}")
        continue

    filename, _ = os.path.splitext(input_file)

    img.save(output_path_original)

    # Convert to grayscale
    grayscale_img = img.convert('L')
    grayscale_filename = f"{filename}_grayscale"
    grayscale_img.save(os.path.join(output_dir, f"{grayscale_filename}.jpg"))

    # Convert to HSV
    img_array = cv2.imread(input_path)
    hsv_img = cv2.cvtColor(img_array, cv2.COLOR_BGR2HSV)
    hsv_img = Image.fromarray(hsv_img)
    hsv_filename = f"{filename}_hsv"
    hsv_img.save(os.path.join(output_dir, f"{hsv_filename}.jpg"))

print(f"Images saved in '{output_dir}' with original, grayscale, and HSV versions.")

```

## Rotar Imagenes

```python
from PIL import Image
import os

input_dir = '.\datasets\Filtered'
output_dir = '.\datasets\Rotated'

os.makedirs(output_dir, exist_ok=True)

input_files = os.listdir(input_dir)

for input_file in input_files:
    input_path = os.path.join(input_dir, input_file)
    
    img = Image.open(input_path)
    
    for i in range(0, 360, 15):
        rotated_img = img.rotate(i, expand=True)
        
        # if i in (45, 135, 225, 315):
        if i not in (0, 90, 180, 270):
            width, height = rotated_img.size
            
            # Calculate the size of the center section (half size) with the same aspect ratio
            if width > height:
                new_width = height // 2
                new_height = height // 2
            else:
                new_width = width // 2
                new_height = width // 2
            
            # Calculate the coordinates for the center section
            left = (width - new_width) // 2
            upper = (height - new_height) // 2
            right = left + new_width
            lower = upper + new_height
            
            # Crop the center section
            rotated_img = rotated_img.crop((left, upper, right, lower))
            
            rotated_img = rotated_img.resize((128, 128))
            
        output_filename = f"rotated_{i}_degrees_{input_file}"
        output_path = os.path.join(output_dir, output_filename)
        rotated_img.save(output_path)

print(f"Images saved in '{output_dir}' with rotations at 15-degree intervals.")

```

## Renombrar

```python
import os

input_dir = '.\datasets\Rotated'
output_name = 'tulip'

input_files = os.listdir(input_dir)

input_files.sort()

counter = 1

for input_file in input_files:
    if input_file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
        file_extension = os.path.splitext(input_file)[1]
        new_name = f"{output_name}{counter}{file_extension}"
        
        os.rename(os.path.join(input_dir, input_file), os.path.join(input_dir, new_name))
        
        counter += 1

print(f"Images renamed to '{output_name}1', '{output_name}2', ... '{output_name}{counter - 1}'.")

```