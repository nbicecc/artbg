root=./docs
dist=/public

if [ ! -d "$root/CNAME" ];then
    cp $root$CNAME .
    rm -rf $root
    mkdir $root
    vuepress build .
    cp $root$dist/* $root/
    rm -rf node_modules
    mv ./CNAME $docs/.
else
echo "No CNAME !"
fi
