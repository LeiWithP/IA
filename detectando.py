import cv2

cap = cv2.VideoCapture(0,cv2.CAP_DSHOW)

majinBooClassif = cv2.CascadeClassifier('./haarcascade/cubrebocas2.xml')

while True:
	test_video = 'test.mp4'
	cap = cv2.VideoCapture(test_video)
	ret,frame = cap.read()
	gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

	toy = majinBooClassif.detectMultiScale(gray,
	scaleFactor = 8,
	minNeighbors = 98,
	minSize=(32,32))

	for (x,y,w,h) in toy:
		cv2.rectangle(frame, (x,y),(x+w,y+h),(0,255,0),2)
		cv2.putText(frame,'Persona con cubrebocas',(x,y-10),2,0.7,(0,255,0),2,cv2.LINE_AA)

	cv2.imshow('frame',frame)
	
	if cv2.waitKey(1) == 27:
		break
cap.release()
cv2.destroyAllWindows()