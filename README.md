# Using OpenCV for Galaxy Morphology Recognition 

#### Summary
The goal is to use OpenCV's cascade classifiers to train on images of nearby galaxies in order to  recognize images of distant galaxies. 

#### How it happened
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

#### Results

**Images fed to the classifier**

![](/classifier/J094401.87-003832.1-irg.cutout.jpg)
![](/classifier/J094651.40-010228.5-irg.cutout.jpg)
![](/classifier/J094446.23-004118.2-irg.cutout.jpg)
![](/classifier/J094700.41-002430.2-irg.cutout.jpg)
![](/classifier/J094622.67-000759.3-irg.cutout.jpg)
![](/classifier/J094725.62-001626.6-irg.cutout.jpg)
![](/classifier/J094628.56-002603.4-irg.cutout.jpg)
![](/classifier/J094628.56-002603.4-irg.cutout.jpg)
![](/classifier/J094842.33-002114.4-irg.cutout.jpg)
![](/classifier/J094631.60-005917.7-irg.cutout.jpg)
![](/classifier/J094919.08+000144.0-irg.cutout.jpg)

**Processed images**

![](/classifier/J094401.87-003832.1-irg.cutoutprocessed.jpg)
![](/classifier/J094651.40-010228.5-irg.cutoutprocessed.jpg)
![](/classifier/J094446.23-004118.2-irg.cutoutprocessed.jpg)
![](/classifier/J094700.41-002430.2-irg.cutoutprocessed.jpg)
![](/classifier/J094622.67-000759.3-irg.cutoutprocessed.jpg)
![](/classifier/J094725.62-001626.6-irg.cutoutprocessed.jpg)
![](/classifier/J094628.56-002603.4-irg.cutoutprocessed.jpg)
![](/classifier/J094628.56-002603.4-irg.cutoutprocessed.jpg)
![](/classifier/J094842.33-002114.4-irg.cutoutprocessed.jpg)
![](/classifier/J094631.60-005917.7-irg.cutoutprocessed.jpg)
![](/classifier/J094919.08+000144.0-irg.cutoutprocessed.jpg)

There were only 3 immediately recognizable elliptical galaxies in the images that were fed but the classifier identified several in every single one of the images. This is because the classifier was only run for three stages and in that time, there wasn't enough information in the postivie samples or the negative samples (more importantly) to recognize elliptical galaxies well.

#### Doing Better

There are several things that need to be done for this program to give proper results:

1. Negative samples - there need to be more of them, and more of them generated. The fact that the classifier could identify an elliptical galaxy in these fed images shows that it didn't know enough about what elliptical galxies *don't* look like. The current negative samples were all other types of galaxies, but star fields, nebulae, and even other mundane things such as images of smoke should be used as negative samples. 

1. Training stages - given a faster machine with more memory (and a more patient student), the classifier could become more robust by training more intensively. With the given sample sizes of all the images, the classifier is taking over 11 hours to even get past stage 4. But to get any, even marginally more accurate results, the classifier needs to be trained for a longer time.

1. Image size - the image size of the nearby galaxies were cut down to 40x40 pixels so that the classifer could train faster. However, this defeats the purpose of being able to study close up images and recognizing the featres from a distance. Ideally, this classifier should be analogous to looking at the profile or a person's face and identifying them from a crowd. But given the small resolution of the positive and negative samples, there wasn't nearly as much information that the classifier could have trained on as it should have. 
