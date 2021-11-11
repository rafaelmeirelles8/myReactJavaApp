package com.myjavaproject.webservices.myJavaProject.Todo;

import com.myjavaproject.webservices.myJavaProject.User.User;
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
        todoList.add(new Todo(1L, new User(), "Study React", new Date(), false));
        todoList.add(new Todo(2L, new User(), "Study Mkt", new Date(), false));
        todoList.add(new Todo(3L, new User(), "Study Soccer", new Date(), false));
    }

    public Todo getTodoById(long todoId) {
        return todoRepository.findById(todoId).get();
    }

    public List<Todo> getAllTodosByUser(User user) {
        return todoRepository.findAllByUser(user);
    }

    public Todo deleteTodoById(long id) {
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
