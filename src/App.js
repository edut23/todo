import { Container, CreateBar, Header, Body, Todos, Input, Item, FinalItem, MainContainer, ThemeIcon, DeleteIcon, CheckIcon, HeaderContent, TextTodo } from './style.js';
import { ReactComponent as Moon } from './todo-app-main/images/icon-moon.svg';
import { ReactComponent as Sun } from './todo-app-main/images/icon-sun.svg';
import { ReactComponent as Delete } from './todo-app-main/images/icon-cross.svg';
import { ReactComponent as Check } from './todo-app-main/images/Check.svg';
import { ReactComponent as Circle } from './todo-app-main/images/Circle.svg';
import { useState, useEffect, useCallback } from 'react';
import { lightTheme, darkTheme } from './theme';


function App() {

  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [id, setId] = useState(-1);
  const [items, setItems] = useState(0);
  const [loaded, setLoaded] = useState(true);
  const [theme, setTheme] = useState('light');
  const [check, setCheck] = useState('false');
  const [filter, setFilter] = useState('all');

  const checkToggler = () => {
    check === 'false' ? setCheck('true') : setCheck('false')
  }

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const data = JSON.parse(localStorage.getItem("Todo"));

  const loader = useCallback(() => {
    if (data !== null) {
      if ((data.length > 0) && loaded) {
        setTodo(data);
        setItems(data.length);
        setId(data.length);
        setLoaded(false);
        console.log(data);
      }
    }
    else
      setLoaded(false);
    ;
  }, [setTodo, setId, setItems, data, loaded, setLoaded])

  useEffect(() => {
    loader();
    setItems(todo.length);
    if (todo !== [])
      localStorage.setItem("Todo", JSON.stringify(todo));
  }, [setItems, todo])


  const textHandler = (e) => {
    setText(e.target.value);
  };

  const deleteTodo = useCallback((n) => {
    const filterTodo = todo.filter((t) => t.id !== n);
    setTodo(filterTodo);
  }, [todo, setTodo]);

  const deleteChecked = useCallback(() => {
    const filterTodo = todo.filter((t) => t.Check !== 'true');
    setTodo(filterTodo);
  }, [todo, setTodo]);

  const taskCheckToggler = (n) => {
    const tempTodo = [...todo];
    tempTodo[n].Check === 'false' ? tempTodo[n].Check = 'true' : tempTodo[n].Check = 'false';
    console.log(tempTodo[n].Check);
    setTodo(tempTodo);
    console.log(todo);
  }



  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (id === -1) {
        setTodo([{ id: Math.random(), Note: text, Check: check }]);
        setId(0);
        setItems(todo.length);
      } else {
        setId(todo.length + 1);
        setTodo([...todo, { id: Math.random(), Note: text, Check: check }]);
        setText("");
        console.log(todo)
      }
    }
  }

  return (
    <Container>
      <Header theme={theme === 'light' ? lightTheme : darkTheme}>
        <HeaderContent>
          <h1 className="title">
            T O D O
          </h1>
          <ThemeIcon onClick={themeToggler}>{theme === 'light' ? <Moon /> : <Sun />}</ThemeIcon>
        </HeaderContent>
      </Header>
      <Body theme={theme === 'light' ? lightTheme : darkTheme}>
        <MainContainer>
          <CreateBar theme={theme === 'light' ? lightTheme : darkTheme}>
            <CheckIcon onClick={checkToggler}>{check === 'true' ? <Check /> : <Circle />}</CheckIcon>
            <Input placeholder="Create a new todo..." value={text} theme={theme === 'light' ? lightTheme : darkTheme} onChange={textHandler} onKeyDown={handleKeyDown} />
          </CreateBar>
          <Todos theme={theme === 'light' ? lightTheme : darkTheme}>
            {id < 0 ? (<FinalItem><p>Press Enter to add a todo</p></FinalItem>) : (
              todo.map((note, index) => (filter === 'all' ?
                <Item
                  theme={theme === 'light' ? lightTheme : darkTheme}
                  key={index}
                ><CheckIcon onClick={() => taskCheckToggler(index)}>{note.Check === 'true' ? <Check /> : <Circle />}</CheckIcon><TextTodo>{note.Note}</TextTodo><DeleteIcon><Delete onClick={(e) => deleteTodo(note.id)} /></DeleteIcon></Item>
                : filter === 'active' ? (note.Check === 'false' &&
                  <Item
                    theme={theme === 'light' ? lightTheme : darkTheme}
                    key={index}
                  ><CheckIcon onClick={() => taskCheckToggler(index)}>{note.Check === 'true' ? <Check /> : <Circle />}</CheckIcon><TextTodo>{note.Note}</TextTodo><DeleteIcon><Delete onClick={(e) => deleteTodo(note.id)} /></DeleteIcon></Item>)
                  : (note.Check === 'true' &&
                    <Item
                      theme={theme === 'light' ? lightTheme : darkTheme}
                      key={index}
                    ><CheckIcon onClick={() => taskCheckToggler(index)}>{note.Check === 'true' ? <Check /> : <Circle />}</CheckIcon><TextTodo>{note.Note}</TextTodo><DeleteIcon><Delete onClick={(e) => deleteTodo(note.id)} /></DeleteIcon></Item>)
              )))}
            {id >= 0 && <FinalItem theme={theme === 'light' ? lightTheme : darkTheme}><p>{items} items left</p>    {filter === 'all' ? (<div>  <p1 onClick={(e) => setFilter('all')} style={{ color: "hsl(220, 98%, 61%)" }}>All</p1><p1 onClick={(e) => setFilter('active')}>Active</p1><p1 onClick={(e) => setFilter('completed')}>Completed</p1></div>) : filter === 'active' ? (<div><p1 onClick={(e) => setFilter('all')}>All</p1><p1 onClick={(e) => setFilter('active')} style={{ color: "hsl(220, 98%, 61%)" }}>Active</p1><p1 onClick={(e) => setFilter('completed')}>Completed</p1></div>) : (<div><p1 onClick={(e) => setFilter('all')}>All</p1><p1 onClick={(e) => setFilter('active')}>Active</p1><p1 onClick={(e) => setFilter('completed')} style={{ color: "hsl(220, 98%, 61%)" }}>Completed</p1></div>)}    <p1 onClick={(e) => deleteChecked()}>Clear Completed</p1></FinalItem>}
          </Todos>
        </MainContainer>
      </Body>
    </Container>
  );
}

export default App;
