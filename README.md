#PUBSUBDemo

Written with ExtJS 4.2, this demo serves many purposes

1) demonstrating how PUBSUB works (this is a custom class I wrote)
2) demonstrating how to dynamically populate the picker of a combo box live and use the same data via PUBSUB to push to a channel 

In this demo, every time you click the combo box's trigger, its data is populated live, the code is very simple, there is a bunch of predefined JSON files with data and they are loaded based on a random algorithm.  The action which loads this also send the data to a "test" channel which uses the data as it sees fit, in this case a textarea control.

I've been using the PUBSUB class for quite a while now and it works in all version of ExtJS 4+.  I have used it with ExtJS 5 and 6 without having to modify it.

When dealing with browsers that do NOT support the PromiseAPI, you can use PUBSUB and some logic to recreate that functionality.

A link to the live demo is here: http://www.claudegauthier.net/demos/PUBSUBDemo/

