BB-8 Force controller
=====

Requirements
-----

* Hardwares
    - [Sphero BB-8](http://www.sphero.com/starwars)
    - [Leap Motion Controller](http://store-world.leapmotion.com/products/leap-motion-controller)
    - Computer with Bluetooth 4.0+
    - Internet (to install npm packages in setup)
* Softwares
    - Linux or Unix-like OS
    - Node.js v5.11.0 or later

Usage
-----

1. Edit `conf` file and locate your node.js installation path.
2. Run `./setup.sh`. It will resolve npm dependancy.
3. Run `. ./conf && ${NODE} ./node_modules/noble/examples/advertisement-discovery.js` to locate your BB-8's BLE address.
4. Edit `main.js` to set the BLE address.
5. Run `run.sh`.
6. Enjoy!

<img src="./demo/demo.gif" width="640" />
