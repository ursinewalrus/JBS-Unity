#pragma strict
/*public var doomspew : ParticleSystem;
Invoke("goingdown",5);
function Start() {
	doomspew = GameObject.Find("Doom").GetComponent(ParticleSystem);
}

function goingdown(){
	doomspew.Play;
}*/
var doomspew : ParticleSystem;
function Start() {
	doomspew = GameObject.Find("Doom").GetComponent(ParticleSystem);
}
Invoke("goingdown",5);

function goingdown(){
	doomspew.Emit = true;
}