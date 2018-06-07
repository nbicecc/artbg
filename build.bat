set root=.\docs
set dist=\public

if exist %root% (
        rd /s/q %root%
        vuepress.cmd build .
        xcopy /E %root%%dist%\* %root%\
        rd /s/q %root%%dist%
        rd /s/q node_modules
) else (
    echo %root% error
)

