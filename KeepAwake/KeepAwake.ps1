# KeepAwake.ps1 - Keeps a Windows PC and its screen awake while this window is open.
# Uses the built-in Windows API SetThreadExecutionState (the same method video players
# and presentation apps use). No mouse movement, no fake key presses, nothing installed.
# To stop: close this window or press Ctrl+C. Normal sleep settings come back right away.

Add-Type @"
using System;
using System.Runtime.InteropServices;
public static class Power {
    [DllImport("kernel32.dll")]
    public static extern uint SetThreadExecutionState(uint esFlags);
}
"@

$ES_CONTINUOUS       = [uint32]"0x80000000"
$ES_SYSTEM_REQUIRED  = [uint32]"0x00000001"   # don't let the PC sleep
$ES_DISPLAY_REQUIRED = [uint32]"0x00000002"   # don't let the screen turn off

$Host.UI.RawUI.WindowTitle = "Keep Awake - close this window to stop"
Write-Host ""
Write-Host "  KEEP AWAKE IS ON" -ForegroundColor Green
Write-Host "  Your PC and screen will stay on while this window is open."
Write-Host "  Close this window (or press Ctrl+C) to turn it off."
Write-Host ""

try {
    while ($true) {
        [void][Power]::SetThreadExecutionState($ES_CONTINUOUS -bor $ES_SYSTEM_REQUIRED -bor $ES_DISPLAY_REQUIRED)
        Write-Host ("  Still awake - " + (Get-Date -Format "h:mm tt")) -ForegroundColor DarkGray
        Start-Sleep -Seconds 60
    }
}
finally {
    # Give control back to Windows' normal power settings
    [void][Power]::SetThreadExecutionState($ES_CONTINUOUS)
    Write-Host "  Keep Awake is off." -ForegroundColor Yellow
}
