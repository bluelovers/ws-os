@echo off
setlocal EnableDelayedExpansion
FOR /F "delims==" %%A IN ('systeminfo.exe ^|  findstr ";"') do  (
    FOR /F "usebackq tokens=2-3 delims=:;" %%B in (`echo %%A`) do (
        set VERBOSE_SYSTEM_LOCALE=%%C
        REM Removing useless leading spaces ...
        FOR /F "usebackq tokens=1 delims= " %%D in (`echo %%B`) do (
            set SYSTEM_LOCALE=%%D
        )
        set SYSTEM_LOCALE_WITH_SEMICOLON=!SYSTEM_LOCALE!;
    set | findstr /I locale
    REM No need to handle second line, quit after first one
    goto :EOF
    )
)
