const royaltyescrow=`#pragma version 6
txn OnCompletion 
int OptIn
==
bnz main_l8
gtxn 1 OnCompletion
int NoOp
==
bnz main_l3
err
main_l3:
gtxna 1 ApplicationArgs 0
byte "createlisting"
==
bnz main_l7
gtxna 1 ApplicationArgs 0
byte "Buynow"
==
bnz main_l6
err
main_l6:
global GroupSize
int 6
==
assert
gtxn 1 OnCompletion
int NoOp
==
assert
gtxn 1 ApplicationID
int AppID
==
assert
gtxn 3 XferAsset
int AssId
==
assert
gtxn 1 RekeyTo
global ZeroAddress
==
assert
gtxn 0 RekeyTo
global ZeroAddress
==
assert
int 1
return
main_l7:
global GroupSize
int 4
==
assert
gtxn 1 TypeEnum
int 6
==
assert
gtxn 1 ApplicationID
int AppID
==
assert
gtxn 3 TypeEnum
int axfer
==
assert
int 1
return
main_l8:
int 1
return`
export default royaltyescrow;