render(h) {
return h(
'div',
{ class: 'mood' },
this.todayIsSunny ? 'Makes me happy' : 'Eh! Doesn't bother me'
)
}
}
