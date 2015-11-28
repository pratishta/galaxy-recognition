from astropy.io import fits 
from numpy import *
import matplotlib.pyplot as plt

a_rawfile = fits.open('nsa_v0_1_2.fits')
d = nsa_rawfile[1].data
#print b.field('subdir')
#print b[1].field('subdir')
n = len(d)
for i in range (0, n-1):
 #   print "hi"
     print ("curl sdss.physics.nyu.edu/mblanton/v0/detect/v0_1/" + d[i].field('subdir') + "/" + d[i].field('iauname') + "-irg.cutout.jpg > " + d[i].field('iauname') + "-irg.cutout.jpg")


