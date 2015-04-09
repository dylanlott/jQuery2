$(document).ready(function(){

	var listo = []; 

	var Task = function(task){
		this.task = task; //task constructor -- remember this format 
		this.id = 'new'; 
	}	


	var addTask = function(task){
		if(task) {
			task = new Task(task); 
			listo.push(task); 

			$('#newItemInput').val(); 
			$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon-arrow-right"></span></li></a>');
			
		}
	}

	//$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear'); //this shit is broken as fuck 


	//opens form 
	$('#newListItem').on('click', function() {
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	}); 

	//closes form 
	$('#cancel').on('click', function(e) {
		e.preventDefault(); 
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	})

})