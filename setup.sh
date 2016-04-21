#!/bin/bash

this_dir=$(cd $(dirname $0) && pwd)
. ${this_dir}/conf

${NODE} ${NPM} install sphero noble leapjs
