
# Devil Fruits Package

NPM module that contains data related to One Piece Devil fruits,
currently stores data on all the canon devil fruits
```javascript
    {
        id: 89,
        name: 'Tori Tori no Mi, Model: Phoenix',
        eng_name: 'Bird-Bird Fruit Model: Phoenix',
        type: 'Mythical Zoan',
        current_user: 'Marco'
    },
```


## Usage/Examples
General use case  
Install devil-fruits with npm

```bash
  npm install devil-fruits
```
```javascript
import { GetAllFruits } from 'devil-fruits';

const fruits = GetAllFruits().map((fruit) =>{
  return(
    <Card {...fruit} />
  );
});

function App() {
  return (
    <CardGrid>
      {fruits}
    </CardGrid>
    );
}

export default App;

```

Contains different Getter functions to get all fruits or based on type
- GetAllFruits()
- GetAllParamecia()
- GetAllZoans()
- GetAllMythicalZoans()
- GetAllAncientZoans()
- GetAllLogias()
- Also a search function SearchUsers(name)

## Todo
 - Add images
 - Add more info about devil fruits
 - Create demo project using devil-fruits
