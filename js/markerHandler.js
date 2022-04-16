
AFRAME.registerComponent('markerhandler',{
    init: async function(){
        this.el.addEventListener("markerFound",(e)=>{
            this.handleMarkerFoundEvent();
        });
        this.el.addEventListener("markerLost",(e)=>{
            this.handleMarkerLostEvent();
        });
    },
    handleMarkerFoundEvent: function(){
        var buttonDiv = document.getElementById('button-div');
        buttonDiv.style.display = 'flex';

        var rBtn = document.getElementById('rating-button');
        rBtn.addEventListener('click',(e)=>{
            Swal.fire({
                icon: 'success',
                title: 'Thank You For Rating',
                showConfirmButton: false,
                timer: 2000
            });
        });

        var oBtn = document.getElementById('order-button');
        oBtn.addEventListener('click',(e)=>{
            Swal.fire({
                icon:'warning', //warning,info,success,error
                text:'Under Progress..'
            });
        });
    },
    handleMarkerLostEvent: function(){
        var buttonDiv = document.getElementById('button-div');
        buttonDiv.style.display = 'none';
    }
});