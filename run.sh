#!/bin/bash

this_dir=$(cd $(dirname $0) && pwd)
. ${this_dir}/conf

#${NODE} ./node_modules/noble/examples/advertisement-discovery.js
sudo ${NODE} main.js
