#pragma strict

Invoke("Dropper", 5);
Invoke("Drama", 1);
    
function Dropper () {
    	//rigidbody.useGravity = true;
    rigidbody.AddForce(5*Physics.gravity);
}
function Drama(){
  // ParticleEmitter.emit = true;
}


