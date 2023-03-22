const fractionalescrow=`#pragma version 6
txn OnCompletion   
int OptIn
==
bnz main_l16       
gtxn 1 OnCompletion
int NoOp
==
bnz main_l3
err
main_l3:
gtxna 1 ApplicationArgs 0
byte "invest"
==
bnz main_l15
gtxna 1 ApplicationArgs 0
byte "investall"
==
bnz main_l14
gtxna 1 ApplicationArgs 0
byte "reclaim"
==
bnz main_l13
gtxna 1 ApplicationArgs 0
byte "reclaimasset"
==
bnz main_l12
gtxna 1 ApplicationArgs 0
byte "unfreeze"
==
bnz main_l11
gtxna 1 ApplicationArgs 0
byte "CreateListingcopy"
==
bnz main_l10
err
main_l10:
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
gtxn 2 TypeEnum
int axfer
==
assert
gtxn 3 TypeEnum
int axfer
==
assert
int 1
return
main_l11:
global GroupSize
int 3
==
assert
gtxn 2 TypeEnum
int afrz
==
assert
int 1
return
main_l12:
global GroupSize
int 3
==
assert
gtxn 1 ApplicationID
int AppID
==
assert
gtxn 1 TypeEnum
int 6
==
assert
gtxn 2 TypeEnum
int axfer
==
assert
int 1
return
main_l13:
global GroupSize
int 5
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
gtxn 2 TypeEnum
int afrz
==
assert
gtxn 3 TypeEnum
int axfer
==
assert
gtxn 4 TypeEnum
int pay
==
assert
int 1
return
main_l14:
global GroupSize
int 6
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
gtxn 2 TypeEnum
int pay
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
gtxn 4 TypeEnum
int afrz
==
assert
gtxn 5 TypeEnum
int pay
==
assert
int 1
return
main_l15:
global GroupSize
int 5
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
gtxn 2 TypeEnum
int pay
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
gtxn 4 TypeEnum
int afrz
==
assert
int 1
return
main_l16:
int 1
return
`
export default fractionalescrow;