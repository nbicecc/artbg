root=./docs
dist=public

if [ ! -d "$root" ];then
    rm -rf $root
    mkdir $root
    vuepress build .
    cp -rf $root/$dist/* $root/
    rm -rf node_modules
    rm -r $root/$dist
else
echo "No CNAME !"
fi
