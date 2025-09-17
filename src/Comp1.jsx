import { useState ,useEffect} from "react";


export default function Home() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/hospitality_assignment_data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  
  const [filterType, setFilterType] = useState("all");
  const [filterYear, setFilterYear] = useState("all");

  const filtered = data.filter((exp) => {
    const typeMatch = filterType === "all" || exp.propertyType === filterType;
    const yearMatch = filterYear === "all" || exp.duration === filterYear;
    return typeMatch && yearMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Hospitality Experience Explorer
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <select
          className="p-2 rounded-lg border"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Property Types</option>
          <option value="business">Business</option>
          <option value="heritage">Heritage</option>
          <option value="resort">Resort</option>
        </select>

        <select
          className="p-2 rounded-lg border"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        >
          <option value="all">All Years</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>

      {/* Experiences */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col"
          >
            <h2 className="text-xl font-semibold">{exp.property}</h2>
            <p className="text-gray-600">
              {exp.location} • {exp.duration}
            </p>
            <span className="text-sm text-blue-600 mb-2">{exp.role}</span>

            {/* Projects */}
            <div className="space-y-3 mt-3">
              {exp.projects.map((p) => (
                <div key={p.id} className="border-t pt-2">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-sm text-gray-700">{p.overview}</p>

                  {p.metrics && (
                    <div className="text-xs text-gray-500 mt-1">
                      {Object.entries(p.metrics).map(([k, v]) => (
                        <div key={k}>
                          {k}: {v}
                        </div>
                      ))}
                    </div>
                  )}

                  {p.initiatives?.length > 0 && (
                    <ul className="list-disc list-inside text-xs text-green-600 mt-1">
                      {p.initiatives.map((i) => (
                        <li key={i.name}>
                          {i.name}: {i.result}
                        </li>
                      ))}
                    </ul>
                  )}

                  {p.team?.length > 0 && (
                    <div className="text-xs text-purple-600 mt-1">
                      Team: {p.team.map((t) => t.name).join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
