// Complete the Index page component for a basic Todo App
import { useState } from "react";
import { Box, Input, Button, List, ListItem, IconButton, Checkbox, Text, Flex, Heading } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Todo App</Heading>
      <Flex mb={4}>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add a new task" mr={2} />
        <Button onClick={handleAddTask} leftIcon={<FaPlus />} colorScheme="blue">
          Add
        </Button>
      </Flex>
      <List spacing={3}>
        {tasks.map((task) => (
          <ListItem key={task.id} p={2} borderWidth="1px" borderRadius="lg" display="flex" alignItems="center" justifyContent="space-between">
            <Checkbox isChecked={task.isCompleted} onChange={() => handleToggleTaskCompletion(task.id)}>
              <Text as={task.isCompleted ? "del" : undefined}>{task.text}</Text>
            </Checkbox>
            <IconButton icon={<FaTrash />} aria-label="Delete task" colorScheme="red" onClick={() => handleDeleteTask(task.id)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
