# set root=.\docs
# set dist=\public

# if exist %root% (
#         copy %root%\CNAME .\
#         rd /s/q %root%
#         md %root%
#         move .\CNAME %root%\
#         vuepress.cmd build .
#         xcopy /E %root%%dist%\* %root%\
#         rd /s/q %root%%dist%
#         rd /s/q node_modules
# ) else (
#     echo %root% error
# )