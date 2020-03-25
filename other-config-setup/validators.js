props: {
status: {
type: String,
required: true,
validator: function (value) {
return [
'syncing'.
'synced','version-conflict',
'error
].indexOf(value) !== -1
}

}


}
