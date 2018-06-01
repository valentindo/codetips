// Commande à entrer dans la console, ajoute des border à toutes les divs

[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)});
