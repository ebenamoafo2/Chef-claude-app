## You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?
   1. Pass the new version of state that we want to use as the 
      replacement for the old version of state.
   2. Pass a callback function. Must return what we want the new
      value of state to be. Will receive the old version of state
      as a parameter so we can use it to help determine what we want 
      the new value of state to be.


## When would you want to pass the first option (from answer above) to the state setter function?
   
   Whenever we don't really care about (or need) the old value,
   we simply want to set a new value.


## When would you want to pass the second option (from answer above) to the state setter function?

   Whenever we do care about the previous value in state and need
   it to help us determine what the new value should be.

## Made this change on my handleSubmit form inside my main.jsx

## Using the formdata.get() method brings in alot of benefits
- Easy Access to form value: You can directly access the value of specific input without looping through the entire form 

- You don't need to use the event.preventDefault() method to stop the page from refreshing everytime the use submits the form 

- You don't need to worry about the content entered in the textbox still sitting there even after the use has entered an input 

- It also works on a number of different input types like <input> <select><textarea><value> and even <input type="file">

-No need to query DOM elements

Instead of document.querySelector("#username").value, you just do formData.get("username").



## FormData.get() doesn't work on radio bottoms [REFER TO SCRIMBA'S LESSON ON FORMS]


`FormData.get()` **does work with radio buttons**, but there are some rules that trip people up:

---

### 🔹 How radios work in forms

* **Radio buttons are grouped by their `name` attribute**.
* In a group, only **one radio can be selected at a time**.
* The **value** of the *selected* radio is what goes into the form data.
* If no radio in the group is selected → `formData.get("groupName")` will return **`null`**.

---

### ✅ Example that works

```html
<form id="myForm">
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female" checked> Female
</form>

<script>
  const form = document.getElementById("myForm");
  const formData = new FormData(form);

  console.log(formData.get("gender")); // "female"
</script>
```

---

### ❌ Why it might look like it doesn’t work

1. **Missing `name` attribute**

   ```html
   <input type="radio" value="male">
   <input type="radio" value="female">
   ```

   → Radios without a `name` aren’t grouped → `FormData` ignores them.

2. **No radio selected**
   If all radios are unchecked → `formData.get("gender")` returns `null`.

3. **Using `id` instead of `name`**
   Radios are grouped and retrieved by `name`, not `id`.

---

👉 **In short:**
`FormData.get()` works perfectly with radio buttons, but you must:

* Give them the same `name`.
* Ensure at least one is checked.
* Use `name` (not `id`) when calling `get()`.

---


Great follow-up 🙌 — this one is sneaky.

### 🔹 Radios without a `value` attribute

If you don’t give a radio button a `value`, the browser automatically gives it a **default value of `"on"`**.

Example:

```html
<form id="myForm">
  <input type="radio" name="gender"> Male
  <input type="radio" name="gender" checked> Female
</form>

<script>
  const form = document.getElementById("myForm");
  const formData = new FormData(form);

  console.log(formData.get("gender")); // "on"
</script>
```

---

### ✅ What happens

* Since neither radio has an explicit `value`, whichever is checked will return `"on"`.
* This makes it **impossible to tell which option was selected**, unless you check the element in the DOM separately (like with `querySelector`).

---

### 🚫 Why it’s a problem

* You lose meaningful data (every option looks the same: `"on"`).
* APIs or servers won’t know whether the user picked *Male* or *Female*.

---

### 💡 Best practice

Always give radios a `value`:

```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```

Now:

```js
formData.get("gender"); // "male" or "female"
```

---

👉 **Summary:**
Without a `value` attribute, all selected radios just return `"on"`.
To make `FormData.get()` useful, always define a meaningful `value`.



---

### 📝 Notes on `FormData.get()` with Checkboxes

* `formData.get(name)` → only returns the **first checked value** for a group of checkboxes with the same `name`.
* This means if multiple checkboxes are selected, you’ll only see one value.

Example:

```html
<input type="checkbox" name="skills" value="js" checked>
<input type="checkbox" name="skills" value="react" checked>
<input type="checkbox" name="skills" value="node">
```

```js
formData.get("skills"); 
// 👉 "js" (only the first checked one)
```

✅ To get **all checked values**, use `formData.getAll(name)`:

```js
formData.getAll("skills");
// 👉 ["js", "react"]
```

---

👉 **Rule of thumb:**

* Use `get()` when expecting **one value** (text inputs, radios, single select).
* Use `getAll()` when expecting **multiple values** (checkboxes, multi-select).



## CONDITIONAL RENDERING

1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on some kind of condition.


2. When would you use &&?
When you want to either display something or NOT display something.


3. When would you use a ternary?
When you need to decide which of 2 things to display


4. What if you need to decide between > 2 options on
   what to display?
if...else if...else conditional or maybe a `switch` statement.
 