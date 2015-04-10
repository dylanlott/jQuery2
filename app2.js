$(document).ready(function() {

	var listo = [];

	var Task = function(task){
		this.task = task; 
		this.id = 'new'; 
	}; 

	var addTask = function(task) {
    if(task) {
        task = new Task(task);
        listo.push(task);

        $('#newItemInput').val('');

        $('#newList').append('<a href="#finish" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');

    }
    $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');

};

	//Opens form
	$('#newListItem').on('click', function () {
	    $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
	});
	
	//closes form
	$('#cancel').on('click', function (e) {
	    e.preventDefault();
	    $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
	});


	$('#saveNewItem').on('click', function (e) { //saves task in input on click 
	    e.preventDefault();
	    var task = $('#newItemInput').val().trim();
	    addTask(task);
	});

	$(document).on('click', '#item', function(e) { //advances task to inProgress 
    e.preventDefault();
    var task = this;        
    advanceTask(task);
    this.id = 'inProgress';
    $('#currentList').append(this.outerHTML);

	});

	$(document).on('click', '#item', function(e) {
    e.preventDefault();
    var task = this;        
    advanceTask(task);
    this.id = 'inProgress';
    $('#currentList').append(this.outerHTML);

});


	//advance task from in progress
	$(document).on('click', '#inProgress', function (e) {
    e.preventDefault();
    var task = this;
    task.id = "archived";
    var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
    advanceTask(task);
    $('#archivedList').append(changeIcon);
	});

	$(document).on('click', '#archived', function (e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
	});

});