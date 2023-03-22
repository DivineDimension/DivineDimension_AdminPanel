const auctionnewescrow=`#pragma version 6        
txn OnCompletion
int OptIn
==
bnz main_l8
gtxn 0 OnCompletion      
int NoOp
==
bnz main_l3
err
main_l3:
gtxna 0 ApplicationArgs 0
byte "CreateListing"     
==
bnz main_l7
gtxna 0 ApplicationArgs 0
byte "claim"
==
bnz main_l6
err
main_l6:
global GroupSize
int 4
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 2 TypeEnum
int axfer
==
assert
gtxn 3 TypeEnum
int pay
==
assert
int 1
return
main_l7:
global GroupSize
int 4
==
assert
gtxn 0 ApplicationID
int AppID
==
assert
gtxn 2 TypeEnum
int axfer
==
assert
gtxn 3 TypeEnum
int axfer
==
assert
gtxn 3 XferAsset
int AssId
==
assert
int 1
return
main_l8:
int 1
return
`
export default auctionnewescrow;