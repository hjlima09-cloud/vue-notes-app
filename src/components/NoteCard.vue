<script setup>
const props = defineProps({
  note: Object,
});
const emit = defineEmits(["delete"]);

const handleDelete = () => {
  emit("delete", props.note.id);
};
</script>

<template>
  <article class="note-card">
    <input type="text" class="card-title" v-model="props.note.title" />
    <input type="checkbox" class="check" v-model="props.note.marked" />
   <button class="delete-btn" @click="handleDelete">
  <i class="fas fa-trash-alt"></i>
</button>
  </article>
</template>

<style>

.note-card{
  background-color:#FAEEC3;
  width: 300px;
  padding: 20px 30px;
  border: 2px solid #ecdeb0;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s;
}

.card-title {
  background-color: transparent;
  width: 80%;
  color: #2c3d38;
  border: none;
  outline: none;
  font-size: 1.1rem;
  transition: border-color 0.3s ease;
}

[type="checkbox"]{
  transform: scale(2) translateX(-2);
}

.check {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 3px;
  background-color: transparent;
  position: relative;
  cursor: pointer;
}

.check:checked {
  background-color: #6E968A;
  border-color: #6E968A;
}

.check:checked::after {
  content: "✔";
  color: white;
  position: absolute;
  top: 0;
  left: 1px;
  font-size: 14px;
}

.note-card:hover{
border: 3px solid #E8D084;
background-color: #E8D084;
}
.note-card:has(input:checked){
  border: 3px solid #E8D084;
  background-color: #E8D084;
  .cart-title{
    font-weight: 100;
  }
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  border-radius: 3px;
  margin-left: 10px;
}

.delete-btn:hover {
  background-color: #c0392b;
}
</style>
