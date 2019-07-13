#!/usr/bin/sh

cd ..
cd components
npm run build

cd ..
pip install .

cd ~/Pruebas/sphinxtest/
make html
