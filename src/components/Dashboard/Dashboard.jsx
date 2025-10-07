import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Users, TrendingDown, Bell, Search, RefreshCw, Download } from 'lucide-react';

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('all');
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const [studentsData] = useState([
    { id: '2021001', name: 'Ana María García', faculty: 'Ingeniería', riskIndex: 85, academic: 'Bajo', economic: 'Alto', psychological: 'Medio', attendance: 65 },
    { id: '2021002', name: 'Carlos Rodríguez', faculty: 'Medicina', riskIndex: 72, academic: 'Medio', economic: 'Medio', psychological: 'Alto', attendance: 75 },
    { id: '2021003', name: 'Laura Martínez', faculty: 'Derecho', riskIndex: 68, academic: 'Medio', economic: 'Bajo', psychological: 'Medio', attendance: 80 },
    { id: '2021004', name: 'Diego Pérez', faculty: 'Ingeniería', riskIndex: 91, academic: 'Bajo', economic: 'Alto', psychological: 'Alto', attendance: 55 },
    { id: '2021005', name: 'María Fernández', faculty: 'Administración', riskIndex: 45, academic: 'Alto', economic: 'Bajo', psychological: 'Bajo', attendance: 90 },
    { id: '2021006', name: 'José López', faculty: 'Medicina', riskIndex: 78, academic: 'Bajo', economic: 'Medio', psychological: 'Alto', attendance: 70 },
  ]);

  const facultyRiskData = [
    { name: 'Ingeniería', alto: 15, medio: 25, bajo: 60 },
    { name: 'Medicina', alto: 10, medio: 30, bajo: 60 },
    { name: 'Derecho', alto: 8, medio: 22, bajo: 70 },
    { name: 'Administración', alto: 12, medio: 28, bajo: 60 },
  ];

  const trendData = [
    { month: 'Ene', riesgo: 45 },
    { month: 'Feb', riesgo: 48 },
    { month: 'Mar', riesgo: 42 },
    { month: 'Abr', riesgo: 52 },
    { month: 'May', riesgo: 55 },
    { month: 'Jun', riesgo: 58 },
  ];

  const getRiskLevel = (index) => {
    if (index >= 70) return 'alto';
    if (index >= 50) return 'medio';
    return 'bajo';
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'alto': return 'bg-red-100 text-red-800 border-red-300';
      case 'medio': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-green-100 text-green-800 border-green-300';
    }
  };

  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.id.includes(searchTerm);
    const matchesFaculty = selectedFaculty === 'all' || student.faculty === selectedFaculty;
    const riskLevel = getRiskLevel(student.riskIndex);
    const matchesRisk = selectedFilter === 'all' || riskLevel === selectedFilter;
    
    return matchesSearch && matchesFaculty && matchesRisk;
  });

  const handleRefresh = () => {
    setLastUpdate(new Date());
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Users className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">StayLearn</h1>
                <p className="text-sm text-gray-600">Sistema de Prevención de Deserción Estudiantil</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleRefresh}
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                <RefreshCw size={18} />
                <span>Actualizar</span>
              </button>
              <div className="text-sm text-gray-600">
                Última actualización: {lastUpdate.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Alto Riesgo</p>
                <p className="text-3xl font-bold text-gray-900">18</p>
                <p className="text-xs text-red-600 mt-1">↑ 3 desde último mes</p>
              </div>
              <AlertCircle className="text-red-500" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Riesgo Medio</p>
                <p className="text-3xl font-bold text-gray-900">32</p>
                <p className="text-xs text-yellow-600 mt-1">→ Sin cambios</p>
              </div>
              <TrendingDown className="text-yellow-500" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Bajo Riesgo</p>
                <p className="text-3xl font-bold text-gray-900">50</p>
                <p className="text-xs text-green-600 mt-1">↓ 2 desde último mes</p>
              </div>
              <Users className="text-green-500" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Alertas Activas</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-xs text-indigo-600 mt-1">Requieren atención</p>
              </div>
              <Bell className="text-indigo-500" size={40} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribución de Riesgo por Facultad</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={facultyRiskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="alto" fill="#ef4444" name="Alto" />
                <Bar dataKey="medio" fill="#f59e0b" name="Medio" />
                <Bar dataKey="bajo" fill="#10b981" name="Bajo" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendencia de Riesgo (Últimos 6 meses)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="riesgo" stroke="#6366f1" strokeWidth={3} name="% Riesgo" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por nombre o ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
            >
              <option value="all">Todas las Facultades</option>
              <option value="Ingeniería">Ingeniería</option>
              <option value="Medicina">Medicina</option>
              <option value="Derecho">Derecho</option>
              <option value="Administración">Administración</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">Todos los Niveles</option>
              <option value="alto">Alto Riesgo</option>
              <option value="medio">Riesgo Medio</option>
              <option value="bajo">Bajo Riesgo</option>
            </select>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              <Download size={18} />
              <span>Exportar</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Estudiantes en Seguimiento</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estudiante</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facultad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Índice de Riesgo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factores</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asistencia</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => {
                  const riskLevel = getRiskLevel(student.riskIndex);
                  return (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.faculty}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getRiskColor(riskLevel)}`}>
                          {student.riskIndex}% - {riskLevel.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex flex-col space-y-1">
                          <span>Académico: {student.academic}</span>
                          <span>Económico: {student.economic}</span>
                          <span>Psicológico: {student.psychological}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.attendance}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-indigo-600 hover:text-indigo-900 font-medium">Ver detalles</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;