#!/usr/bin/python

f =  open('finallygalaxnum')
for line in f:
    line = line[:-1] # gets rid of the newline at the end of line
    print ("curl http://www.zsolt-frei.net/Gcat_htm/Catalog/CJpeg/n" + line + ".jpg > n" + line + ".jpg")

