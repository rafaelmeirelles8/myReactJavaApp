package com.myjavaproject.webservices.myJavaProject.Todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoJpaService {

    @Autowired
    private TodoRepository todoRepository;

    private static List<Todo> todoList = new ArrayList<>();

    static {
        todoList.add(new Todo(1L, "Rafael", "Study React", new Date(), false));
        todoList.add(new Todo(2L, "Mariana", "Study Mkt", new Date(), false));
        todoList.add(new Todo(3L, "Fred", "Study Soccer", new Date(), false));
    }

    public Todo getTodoById(long todoId) {
        return todoRepository.findById(todoId).get();
    }

    public List<Todo> getAllTodosByUser(String username) {
        return todoRepository.findAllByUsername(username);
    }

    public Todo deleteTodoByUserNameAndId(long id) {
        Todo deleteTodo = todoRepository.findById(id).get();

        if(deleteTodo != null) {
            todoRepository.delete(deleteTodo);
        }

        return deleteTodo;
    }

    public Todo saveTodo(Todo todo) {
        Todo todoUpdated = todoRepository.save(todo);

        return todoUpdated;
    }

}
