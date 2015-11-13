'use strict';

(function (){
	var text_area_job_name = document.getElementById('text-area-job-name')
	var todo_list = document.getElementById('todo-list');
	var add_button = document.getElementById('add-button');
	add_button.onclick = on_click_add_button;

	function on_click_add_button(){
		var new_job_name = text_area_job_name.value;	// todo
		var new_job = create_new_job(new_job_name);
		todo_list.appendChild(new_job);
		text_area_job_name.value = '';
	}

	function create_new_job(new_job_name){
		var container = document.createElement('div');

		var job_text = document.createElement('span');
		job_text.textContent = new_job_name;
		container.appendChild(job_text);

		var done_button = document.createElement('button');
		done_button.type = 'button';
		done_button.textContent = 'Done';
		done_button.onclick = function(){
			var target_job = done_button.parentNode;
			todo_list.removeChild(target_job);
		};
		container.appendChild(done_button);

		return container;
	}

	function remove_job(pressed_button){
		var target_job = pressed_button.parentNode;
		todo_list.removeChild(target_job);
	}
})();