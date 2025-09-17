import { useState, useEffect } from "react";

function Sidebar() {
  const items = [
    "Experience Matching Details",
    "Summary",
    "SAP TM Functional Consultant",
    "Overall Match Reasoning",
    "SAP TM Specific Experience Match",
    "Domain-Sector-wise Details",
    "Additional Requirements Match",
  ];

  return (
    <aside className="w-64 bg-white shadow p-4 space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="px-3 py-2 rounded cursor-pointer hover:bg-blue-100"
        >
          {item}
        </div>
      ))}
    </aside>
  );
}

function JobHeader({ title, tags }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-wrap items-center gap-2 mb-6">
      <h1 className="text-xl font-bold flex-1">{title}</h1>
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function MatchSummary() {
  const rows = [
    { competency: "SAP TM", score: "High", label: "Strong" },
    { competency: "Integration", score: "Medium", label: "Moderate" },
    { competency: "Configuration", score: "Low", label: "Weak" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <h2 className="font-semibold text-lg mb-4">Overall Match Summary</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Competency</th>
            <th className="text-left p-2">Score</th>
            <th className="text-left p-2">Label</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.competency} className="border-t">
              <td className="p-2">{r.competency}</td>
              <td className="p-2">{r.score}</td>
              <td className="p-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {r.label}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Reasoning() {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6 space-y-3">
      <h2 className="font-semibold text-lg">Overall Match Reasoning</h2>
      <div className="p-3 bg-green-100 text-green-800 rounded">
        <strong>Strengths:</strong> Hands-on experience with SAP TM modules.
      </div>
      <div className="p-3 bg-red-100 text-red-800 rounded">
        <strong>Risks:</strong> Limited exposure to third-party integrations.
      </div>
      <div className="p-3 bg-yellow-100 text-yellow-800 rounded">
        <strong>Key Keywords:</strong> Transportation planning, freight settlement.
      </div>
    </div>
  );
}

function ExperienceTable() {
  const rows = [
    { area: "Transportation", years: 3, tools: "SAP TM" },
    { area: "Logistics", years: 2, tools: "Integration Suite" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <h2 className="font-semibold text-lg mb-4">SAP TM Specific Experience Match</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Area</th>
            <th className="text-left p-2">Years</th>
            <th className="text-left p-2">Tools</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.area}</td>
              <td className="p-2">{r.years}</td>
              <td className="p-2">{r.tools}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DomainSectorTable() {
  const rows = [
    { domain: "Manufacturing", experience: "5 years", match: "High" },
    { domain: "Retail", experience: "2 years", match: "Medium" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <h2 className="font-semibold text-lg mb-4">Domain-Sector-wise Details</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Domain</th>
            <th className="text-left p-2">Experience</th>
            <th className="text-left p-2">Match</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.domain}</td>
              <td className="p-2">{r.experience}</td>
              <td className="p-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {r.match}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RequirementsMatch() {
  const reqs = [
    { requirement: "Certification in SAP TM", status: "Met" },
    { requirement: "Experience with S/4HANA", status: "Partially Met" },
    { requirement: "Integration exposure", status: "Not Met" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <h2 className="font-semibold text-lg mb-4">Additional Requirements Match</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Requirement</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reqs.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.requirement}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    r.status === "Met"
                      ? "bg-green-100 text-green-700"
                      : r.status === "Partially Met"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <JobHeader title="SAP TM Functional Consultant" tags={["Full-time", "Remote"]} />
        <MatchSummary />
        <Reasoning />
        <ExperienceTable />
        <DomainSectorTable />
        <RequirementsMatch />
      </main>
    </div>
  );
}
