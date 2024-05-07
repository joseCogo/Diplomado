
  <template> 
  <h3 class="text-4xl font-extrabold dark:text-white justif-center">Aspirantes Inscritos por Periodo/Facultad/Programa</h3>
 <br>
  <div class="container mx-auto mt-8">
    <div class="flex items-center space-x-4">
      <div>
        <label for="periodo" class="block text-gray-700">Periodo:</label>
        <select v-model="filtro.periodo" id="periodo" class="border border-zinc-300 rounded px-2 py-1">
          <!-- <option value="">Todos</option> -->
          <option v-for="periodo in periodos" :value="periodo">{{ periodo }}</option>
        </select>
      </div>
      <div>
        <label for="facultad" class="block text-gray-700">Facultad:</label>
        <select v-model="filtro.facultad" id="facultad" class="border border-zinc-300 rounded px-2 py-1">
          <!-- <option value="">Todas</option> -->
          <option v-for="facultad in facultades" :value="facultad">{{ facultad }}</option>
        </select>
      </div>
      <div>
        <label for="programa" class="block text-gray-700">Programa:</label>
        <select v-model="filtro.programa" id="programa" class="block w-full mt-1 p-2 border border-gray-300 rounded-md">
          <!-- <option value="">Todos</option> -->
          <option v-for="programa in programas" :value="programa">{{ programa }}</option>
        </select>
      </div>
      <button @click="filtrar" class="bg-green-500 text-white px-2 py-1 rounded">Filtrar</button>
    </div>
    <table v-if="datosFiltrados.length > 0" class="mt-8 w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">Periodo</th>
          <th class="border border-gray-300 px-4 py-2">Facultad</th>
          <th class="border border-gray-300 px-4 py-2">Programa</th>
          <th class="border border-gray-300 px-4 py-2">Total Matriculados</th>
          <th class="border border-gray-300 px-4 py-2">Sexo Femenino</th>
          <th class="border border-gray-300 px-4 py-2">Sexo Masculino</th>
          <th class="border border-gray-300 px-4 py-2">Estrato 1</th>
          <th class="border border-gray-300 px-4 py-2">Estrato 2</th>
          <th class="border border-gray-300 px-4 py-2">Estrato 3</th>
          <th class="border border-gray-300 px-4 py-2">Estrato 4</th>
          <th class="border border-gray-300 px-4 py-2">Estrato 5</th>
          <th class="border border-gray-300 px-4 py-2">Estrato 6</th>
        </tr>
    </thead>
    <tbody>
      <tr v-for="(dato, index) in datosFiltrados" :key="index">
        <td class="border border-gray-300 px-4 py-2">{{ dato.periodo }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.facultad }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.programa }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.total_matricula }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.sexo_feme }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.sexo_masc }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.estrato_1 }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.estrato_2 }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.estrato_3 }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.estrato_4 }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.estrato_5 }}</td>
        <td class="border border-gray-300 px-4 py-2">{{ dato.estrato_6 }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else class="mt-4">No hay datos para mostrar.</p>
</div>
</template> 

<script>

import axios from 'axios';

 export default {
 data() {
   return {
     filtro: {
       periodo: '',
       facultad: '',
       programa: ''
     },
     datos: [],
     datosFiltrados: [],
     periodos: [],
     facultades: [],
     programas: []
   };
 },
 mounted() {
   this.obtenerDatos();
 },
 methods: {
   obtenerDatos() {
     axios.get('https://www.datos.gov.co/resource/r86y-229a.json')
       .then(response => {
         this.datos = response.data;
         this.actualizarFiltros();
       })
       .catch(error => {
         console.error('Error al obtener los datos:', error);
       });
   },
   actualizarFiltros() {
     this.periodos = [...new Set(this.datos.map(dato => dato.periodo))];
     this.facultades = [...new Set(this.datos.map(dato => dato.facultad))];
     this.programas = [...new Set(this.datos.map(dato => dato.programa))];
   },
   filtrar() {
     this.datosFiltrados = this.datos.filter(dato =>
       (this.filtro.periodo === '' || dato.periodo === this.filtro.periodo) &&
       (this.filtro.facultad === '' || dato.facultad === this.filtro.facultad) &&
       (this.filtro.programa === '' || dato.programa === this.filtro.programa)
     );
   }
 }
 };
</script>

