<template>
  <h3 class="text-4xl font-extrabold dark:text-white justify-center">Grafico de Barras de Aspirantes Inscritos por Periodo y Genero</h3>
  <div class="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-lg">
  <div class="flex items-center justify-center space-x-4 mb-8">
      <div class="flex items-center space-x-4">
          <label for="periodo" class="text-sm font-medium text-gray-700">Periodo:</label>
          <select id="periodo" v-model="filtroPeriodo" class="border border-blue-500 rounded-md px-2 py-1 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option v-for="periodo in periodosUnicos" :key="periodo" :value="periodo" class="text-gray-900">
                  {{ periodo }}
              </option>
          </select>
      </div>
      <div class="flex items-center space-x-4">
          <label for="programa" class="text-sm font-medium text-gray-700">Género:</label>
          <select id="programa" v-model="filtroGenero" class="border border-blue-500 rounded-md px-2 py-1 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="todos" class="text-gray-900">Total Inscritos</option>
              <option value="mujeres" class="text-gray-900">Mujeres</option>
              <option value="hombres" class="text-gray-900">Hombres</option>
              
          </select>
      </div>
      <div class="flex items-center space-x-4">
          <button @click="filtrar" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
              Buscar
          </button>
      </div>
  </div>
</div>

  <div class="mt-8">
      <canvas id="myChart" class="w-full h-64"></canvas>
  </div>
</template>


<script>
import axios from 'axios';
import Chart from 'chart.js/auto';

export default {
data() {
  return {
    datos: [],
    filtroPeriodo: '2017-1',
    filtroGenero: 'todos',
    myChart: null
  };
},
async created() {
  await this.fetchData();
},
computed: {
      datosFiltrados() {
          let filtro = this.datos
          if (this.filtroPeriodo) {
              filtro = filtro.filter(
                  (fila) => fila.periodo === this.filtroPeriodo
              )
          }
          return filtro
      },
      periodosUnicos() {
          return [...new Set(this.datos.map((fila) => fila.periodo))]
      },
  },
methods: {
  async fetchData() {
    try {
      const response = await axios.get('https://www.datos.gov.co/resource/r86y-229a.json');
      this.datos = response.data;
      this.filtrar();
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  },
  filtrar() {
    const filteredData = this.filterChartData();
    this.renderChart(filteredData);
  },
  filterChartData() {
    let filteredData = [...this.datos];
    if (this.filtroPeriodo) {
      filteredData = filteredData.filter((fila) => fila.periodo === this.filtroPeriodo);
    }
    if (this.filtroGenero === 'hombres') {
      filteredData = filteredData.filter((item) => item.sexo_masc !== '');
    } else if (this.filtroGenero === 'mujeres') {
      filteredData = filteredData.filter((item) => item.sexo_feme !== '');
    }
    return filteredData;
  },
  destroyChart() {
    if (this.myChart) {
      this.myChart.destroy();
      this.myChart = null;
    }
  },
  renderChart(filteredData) {
    if (this.myChart) {
      this.destroyChart();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: filteredData.map((item) => item.programa),
        datasets: [
          {
            label: this.filtroGenero === 'todos' ? 'Total Matriculados' : `Total ${this.filtroGenero}`,
            data: filteredData.map((item) => {
              if (this.filtroGenero === 'todos') {
                return item.total_matricula;
              } else if (this.filtroGenero === 'hombres') {
                return item.sexo_masc;
              } else if (this.filtroGenero === 'mujeres') {
                return item.sexo_feme;
              }
            }),
            backgroundColor: 'rgba(101, 102, 335, 0.2)',
            borderColor: 'rgba(101, 102, 335, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        animation: {
          duration: 200000,
          easing: 'easeOutBounce',
        },
      },
    });
  },
},
};
</script>