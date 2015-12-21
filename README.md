# Using OpenCV for Galaxy Morphology Recognition 

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
**Miscellaneous**

There were other issues with not having the correct packages downloaded. The following were necessary dependencies:
```
imagemagick
node
npm
opencv-2.4.9
node-opencv
``` 

Additionally, to use this tutorial, an older version of OpenCV had to be used (opencv-2.4.9) because the latest version didn't contain a haartraining directory which had necessary files. 

!(/classifier/J094401.87-003832.1-irg.cutoutprocessed.jpg)

!(/classifier/J094651.40-010228.5-irg.cutoutprocessed.jpg)
!(/classifier/J094446.23-004118.2-irg.cutoutprocessed.jpg)
!(/classifier/J094700.41-002430.2-irg.cutoutprocessed.jpg)
!(/classifier/J094622.67-000759.3-irg.cutoutprocessed.jpg)
!(/classifier/J094725.62-001626.6-irg.cutoutprocessed.jpg)
!(/classifier/J094628.56-002603.4-irg.cutoutprocessed.jpg)
!(/classifier/J094628.56-002603.4-irg.cutoutprocessed.jpg)
!(/classifier/J094842.33-002114.4-irg.cutoutprocessed.jpg)
!(/classifier/J094631.60-005917.7-irg.cutoutprocessed.jpg)
!(/classifier/J094919.08+000144.0-irg.cutoutprocessed.jpg)