root=./docs
dist=public

if [ ! -d "$root/CNAME" ];then
    cp $root/CNAME .
    rm -rf $root
    mkdir $root
    vuepress build .
    cp -rf $root/$dist/* $root/
    rm -rf node_modules
    mv ./CNAME $root/.
    rm -r $root/$dist
else
echo "No CNAME !"
fi
