# Using OpenCV for Galaxy Morphology Recognition 
#### Pratishta Yerakala

**Summary**:
The goal is to use OpenCV's cascade classifiers to train on images of nearby galaxies in order to  recognize images of distant galaxies. 

**How it happened**:
The images of the nearby galaxies were taken from (http://www.zsolt-frei.net/catalog.htm)[Zsolt Frei’s catalog] and the images of the distant galaxies were taken from (http://www.nsatlas.org/)[NASA’s Sloan Atlas]. Python and bash scripts used curl to download the images in the appropriate directory. After that, the (http://coding-robin.de/2013/07/22/train-your-own-opencv-haar-classifier.html)[Train Your Own OpenCV Haar Classifier] tutorial was used to build a classifier that could train on images of a type of galaxy. Ideally, the classifier should train on the given images and then be able to be used to recognize the types it trained on with the distant galaxies. However, there were some problems when actually following this process:

1.  10 images of elliptical galaxies from Frei's catalog of nearby ones. Those 10 images were for the positive samples; the rest of Frei's catalog that wasn't elliptical, 100 spiral / irregular / miscellaneous galaxies, was used for the negative samples. 


During the first run of the tutorial, the classifier didn't train because the memor
