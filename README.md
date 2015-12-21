# Using OpenCV for Galaxy Morphology Recognition 
#### Pratishta Yerakala

**Summary**:
The goal is to use OpenCV's cascade classifiers to train on images of nearby galaxies in order to  recognize images of distant galaxies. 

**How it happened**:
The images of the nearby galaxies were taken from [Zsolt Frei’s catalog](http://www.zsolt-frei.net/catalog.htm) and the images of the distant galaxies were taken from [NASA’s Sloan Atlas](http://www.nsatlas.org/). Python and bash scripts used curl to download the images in the appropriate directory. After that, the [Train Your Own OpenCV Haar Classifier](http://coding-robin.de/2013/07/22/train-your-own-opencv-haar-classifier.html) tutorial was used to build a classifier that could train on images of a type of galaxy. Ideally, the classifier should train on the given images and then be able to be used to recognize the types it trained on with the distant galaxies. However, there were some problems when actually following this process:

**Not Enough Memory**

Trying to follow the tutorial instructions exactly threw memory errors. This was because the program was simply creating too many positive and negative samples that the Linux distribution did not have space to deal with. In order to deal with this issue, fewer images have been generated for the negative samples and fewer images were used for the positive samples. There was a total of 10 images of elliptical galaxies from Frei's catalog of nearby ones for the positives. The rest of Frei's catalog that wasn't elliptical -- 100 spiral / irregular / miscellaneous galaxies -- was used for the negative samples. 


**Time To Train**

After compilation was successful and the program was running, it was taking quite a long time for the scope of this project. In order to do a quick run of the whole process, the positive and negative images were resized from being 313x313 to 40x40. This helps the program run faster. 

```shell
convert *.jpg -resize 40x40 *.jpg 
```
