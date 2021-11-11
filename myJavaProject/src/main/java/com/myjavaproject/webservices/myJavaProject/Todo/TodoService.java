package com.myjavaproject.webservices.myJavaProject.Todo;

import com.myjavaproject.webservices.myJavaProject.User.User;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {


    private static List<Todo> todoList = new ArrayList<>();

    static {
        todoList.add(new Todo(1L, new User(), "Study React", new Date(), false));
        todoList.add(new Todo(2L, new User(), "Study Mkt", new Date(), false));
        todoList.add(new Todo(3L, new User(), "Study Soccer", new Date(), false));
    }

    public Todo getTodoById(long todoId) {
        Todo todoReturn = todoList.stream()
                .filter(todo -> todo.getId() == todoId)
                .findFirst().get();

        return todoReturn;
    }

    public List<Todo> getAllTodosByUser(String username) {
        return todoList;
    }

    public Todo deleteTodoByUserNameAndId(long id) {
        Todo deleteTodo = todoList.stream()
                .filter(todo -> todo.getId() == id)
                .findFirst().get();

        if(deleteTodo != null) {
            todoList.remove(deleteTodo);
        }

        return deleteTodo;
    }

    public Todo saveTodo(Todo todo) {
        if(todo.getId() == -1 || todo.getId() == 0) {
            todo.setId(todoList.size() + 1L);
        }
        else {
            deleteTodoByUserNameAndId(todo.getId());
        }
        todoList.add(todo);

        return todo;
    }

}
