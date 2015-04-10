$(document).ready(function(){

	var listo = []; 

	var Task = function(task){
		this.task = task; //task constructor 
		this.id = 'new'; 
	}	

	var addTask = function(task) {
    if(task) {
        task = new Task(task);
        listo.push(task);
        console.log("task added" + task.task); 
        $('#newItemInput').val('');

        $('#newList').append('<a href="#finish" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');

    	}
    //$('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
	};

	var advanceTask = function(task) {
	    var modified = task.innerText.trim()
	    for (var i = 0; i < listo.length; i++) {
	        if (listo[i].task === modified) {
	            if (listo[i].id === 'new') {
	                listo[i].id = 'inProgress';
	            } else if (listo[i].id === 'inProgress') {
	                listo[i].id = 'archived';
	            } else {
	                listo.splice(i, 1);
	            }
	            break;
	        }
	    }
	    task.remove();
	    console.log("removed"); 
	};

	$(document).on('click', '#item', function(e) { //call document hook to let document know we're adding things to it. 
		e.preventDefault(); 
		var task = this; 
		advanceTask(task); 
		this.id = 'inProgress';
		$('#currentList').append(this.outerHTML); 
	})

	$(document).on('click', '#inProgress', function(e) {
		e.preventDefault(); //makes sure HTML elements render without default properties 
		var task = this; 
		task.id = "archived"; 
		var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove'); 
		advanceTask(task); 
		$('#archivedList').append(changeIcon); 
	})

	$(document).on('click', '#archived', function(e) {
		e.preventDefault(); 
		var task = this; 
		advanceTask(task); 
	})
});