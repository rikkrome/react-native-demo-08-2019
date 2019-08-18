
### HTML
```html

<div class="style1">
  <p class="style2">Hello world</p>
</div>

```

```css

.style1 {
  margin: 15;
}

.style2 {
  color: red;
}

```
---

### JSX
```html

<View style={{ margin: 15 }}>
  <Text style={{ color: 'red' }}>Hello world</Text>
</View>


```

---
### JSX props break down

```html
<View style={{ margin: 15 }}>
```
`----------------------------------`

```js
let style = { margin: 15 }
```
```html
<View style={style}>
```
`----------------------------------`
```js
let style = { margin: 15 }
let data = "1234"
```
```html
<View style={style} data={data}> 
<View style={{ margin: 15 }} data="1234"> 
```
`----------------------------------`

```js
let obj = { style, data }
```
```html
<View { ...obj }> 

```
`----------------------------------`


```js
  return (
    <CustomComponent style={{ margin: 15 }} data="1234"/>
  )
```

```js
  const CustomComponent = ({ style, data }) => {
    // style = {  margin: 15 }
    // data = "1234"
  }
```





