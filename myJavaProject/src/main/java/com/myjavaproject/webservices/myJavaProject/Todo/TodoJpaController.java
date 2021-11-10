package com.myjavaproject.webservices.myJavaProject.Todo;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/todos")
@CrossOrigin("*")
@AllArgsConstructor
public class TodoJpaController {

    @Autowired
    private final TodoJpaService todoService;

    @GetMapping(path="/jpa/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping(path = "/jpa/username/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoService.getAllTodosByUser(username);
    }

    @DeleteMapping(path = "/jpa/username/{username}/todos/{todoId}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long todoId) {
        Todo todo = todoService.deleteTodoByUserNameAndId(todoId);

        if(todo != null) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping(path = "/jpa/username/{username}/todos/{todoid}")
    public Todo getTodoById(@PathVariable String username,
            @PathVariable long todoid) {

        return todoService.getTodoById(todoid);
    }

    @PutMapping(path = "/jpa/username/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                                           @PathVariable long id,
                                           @RequestBody Todo todo) {
        todo.setUsername(username);
        Todo updatedTodo = todoService.saveTodo(todo);

        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

    @PostMapping(path = "/jpa/username/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username,
                                           @RequestBody Todo todo) {
        todo.setUsername(username);
        Todo newTodo = todoService.saveTodo(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newTodo.getId()).toUri();


        return ResponseEntity.created(uri).build();
    }


}
