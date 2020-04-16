---
title: Hacking Bresser Weather Station 433Mhz
layout: post
categories:
- Arduino
- RaspberryPi
- Reverse Engineering
description: Thinking process to fire weather data of my Bresser Weather Station with
  433Mhz receiver to connect it to the cloud.
---

## Introduction
For christmas, I received my first weather station but I can't connect it to Internet on the cloud to get weather data.
Because of that, I decide to reverse engineering my weather station by using a 433Mhz receiver, an arduino or a RaspberryPi.
My thinking process start by searching on the Internet, if somebody did this, I found lot of solutions.

## Device

* **Bresser Weather Station TemeoTrend NBF** :

{% imagegallery assets/media/images/WeatherStation/Bresser %}

The archived documentation is available [here](http://archive.bresser.de/download/7004110/ANL7004110MSP0414BRESSER.pdf) 
## Reverse Engineering the 433Mhz signal
I cropped the Internet to looking for a good method to reverse engeneer the 433Mhz signal emit by the weather station.
Lot of solution consist to be intrusive with the hardware.  

![lacrosse_wireless_temp_sensor](https://hackaday.com/wp-content/uploads/2011/06/lacrosse_wireless_temp_sensor.jpg){:width="300"}

You need to add an audio jack to the pcb at the receiver/emiter postion in the device to sniff signal with Audacity.
I let you the link [here](https://hackaday.com/2011/06/13/reverse-engineering-wireless-weather-stations/)

An other solution consists by using an arduino or a raspberry with an rf433 emitter/receiver. I used those as below, order in [Aliexpress](https://fr.aliexpress.com/item/32896035786.html?spm=a2g0s.9042311.0.0.27426c37bdjIUv):

{% imagegallery assets/media/images/WeatherStation/Transmitter %}

A good video from [Tommy Desrochers](https://www.youtube.com/channel/UC9_nxvBohH1G2yR77XTdA2g), that explain how to proceed to do this.

{% youtube https://www.youtube.com/watch?v=l6o4T9OYYPo %}

And last, you could use an transmitter dungle and the [rtl_433](https://github.com/merbanan/rtl_433) library to analyse and decode signals.

An other good video from [Andreas Spiess](https://www.youtube.com/channel/UCu7_D0o48KbfhpEohoP7YSQ):

{% youtube https://www.youtube.com/watch?v=oYfbEyzT-Gs %}
## Conclusion
I decide to create a RFLINK gateway to sniff more than one kind of signal and used it in a domotic system. 
The RFLINK gateway can also sniff 433Mhz signals.
