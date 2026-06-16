import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  Clock3,
  Gauge,
  MapPinned,
  Route as RouteIcon,
  Satellite,
  Truck,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type FleetVehicle = {
  id: string;
  name: string;
  type: string;
  status: "Live" | "Training" | "Transit" | "Service";
  routeName: string;
  district: string;
  learners: number;
  battery: number;
  signal: string;
  eta: string;
  color: string;
  image: string;
  path: [number, number][];
};

const fleet: FleetVehicle[] = [
  {
    id: "SOW-MIN-01",
    name: "Futuristic Mining Skill Lab",
    type: "Mining · Steel · Power",
    status: "Live",
    routeName: "Sukinda - Keonjhar - Angul",
    district: "Keonjhar",
    learners: 126,
    battery: 91,
    signal: "5G/SAT",
    eta: "18 min",
    color: "#00d4ff",
    image: "/assets/images/futuristic-mining-truck-night.jpeg",
    path: [
      [20.948, 85.954],
      [21.628, 85.581],
      [20.844, 85.151],
      [20.296, 85.824],
    ],
  },
  {
    id: "SOW-NUT-02",
    name: "Nutri Nest Learning Unit",
    type: "Nutrition · Anganwadi",
    status: "Training",
    routeName: "Bhubaneswar - Puri - Ganjam",
    district: "Puri",
    learners: 84,
    battery: 78,
    signal: "4G",
    eta: "On site",
    color: "#ff8a00",
    image: "/assets/images/nutri-nest-side-ai.jpeg",
    path: [
      [20.296, 85.824],
      [19.813, 85.831],
      [19.314, 84.794],
      [19.07, 84.323],
    ],
  },
  {
    id: "SOW-LIV-03",
    name: "Livelihoods on Wheels",
    type: "Agriculture · Fisheries · Goatery",
    status: "Transit",
    routeName: "Koraput - Rayagada - Kalahandi",
    district: "Rayagada",
    learners: 112,
    battery: 86,
    signal: "SAT",
    eta: "32 min",
    color: "#8cff66",
    image: "/assets/images/livelihoods-truck-wide.jpeg",
    path: [
      [18.813, 82.713],
      [19.171, 83.416],
      [19.913, 83.164],
      [20.184, 83.222],
    ],
  },
  {
    id: "SOW-WASH-04",
    name: "Sanitation & WASH Unit",
    type: "WASH · Sanitation Services",
    status: "Live",
    routeName: "Cuttack - Jajpur - Balasore",
    district: "Jajpur",
    learners: 68,
    battery: 73,
    signal: "5G",
    eta: "11 min",
    color: "#a78bfa",
    image: "/assets/images/sanitation-wash-truck.jpeg",
    path: [
      [20.462, 85.883],
      [20.851, 86.337],
      [21.494, 86.933],
      [21.802, 87.006],
    ],
  },
  {
    id: "SOW-IND-05",
    name: "Industrial Simulation Command Bay",
    type: "Ports · Power · Simulation",
    status: "Service",
    routeName: "Jharsuguda - Sambalpur - Paradip",
    district: "Paradip",
    learners: 96,
    battery: 64,
    signal: "Depot",
    eta: "Ready 2h",
    color: "#ff4d6d",
    image: "/assets/images/industrial-sim-command-bay.png",
    path: [
      [21.855, 84.006],
      [21.466, 83.981],
      [20.951, 85.098],
      [20.316, 86.611],
    ],
  },
];

const statusClass: Record<FleetVehicle["status"], string> = {
  Live: "text-accent border-accent/40 bg-accent/10",
  Training: "text-highlight border-orange-300/40 bg-orange-400/10",
  Transit: "text-[#8cff66] border-[#8cff66]/40 bg-[#8cff66]/10",
  Service: "text-[#ff4d6d] border-[#ff4d6d]/40 bg-[#ff4d6d]/10",
};

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Live Fleet Tracking — Skill on Wheels" },
      {
        name: "description",
        content:
          "Track Skill on Wheels mobile training units across Odisha with live vehicle cards, district boundaries and color-coded route paths.",
      },
    ],
  }),
  component: TrackingPage,
});

function TrackingPage() {
  const activeFleet = fleet.filter((vehicle) => vehicle.status !== "Service").length;
  const totalLearners = fleet.reduce((sum, vehicle) => sum + vehicle.learners, 0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border pt-10">
        <div className="absolute inset-0">
          <img
            src="/assets/images/odisha-connectivity-aerial.png"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,18,.98),rgba(5,10,18,.72),rgba(5,10,18,.92))]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-silver transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> Back to site
          </a>
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
                Fleet Operations
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-normal text-mask-reveal md:text-7xl">
                A refined view of the mobile training network.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-silver">
                Fleet inventory, latest vehicle positions, Odisha district boundaries and planned
                route paths in a clean command interface.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Metric icon={Truck} label="Fleet units" value={fleet.length.toString()} />
              <Metric icon={Activity} label="Active now" value={activeFleet.toString()} />
              <Metric icon={MapPinned} label="District layer" value="30" />
              <Metric icon={Satellite} label="Learners today" value={totalLearners.toString()} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-accent">
              Fleet Manifest
            </p>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Vehicles currently in the network.
            </h2>
          </div>
          <div className="rounded-sm border border-accent/25 bg-accent/10 px-4 py-3 text-xs uppercase tracking-widest text-accent">
            Color chips match route lines on the map
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {fleet.map((vehicle, i) => (
            <motion.article
              key={vehicle.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: i * 0.04 }}
              className="overflow-hidden rounded-md border border-border bg-surface/80 transition-colors hover:border-accent/25"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                <div
                  className="absolute bottom-4 left-4 h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: vehicle.color }}
                />
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display text-lg font-bold leading-tight">
                      {vehicle.name}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-silver">
                      {vehicle.id}
                    </div>
                  </div>
                  <span
                    className={`rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${statusClass[vehicle.status]}`}
                  >
                    {vehicle.status}
                  </span>
                </div>
                <div className="space-y-3 text-sm text-silver">
                  <FleetLine icon={RouteIcon} label={vehicle.routeName} />
                  <FleetLine icon={MapPinned} label={vehicle.district} />
                  <FleetLine icon={Clock3} label={vehicle.eta} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-md border border-accent/25 bg-surface">
          <div className="grid border-b border-border lg:grid-cols-[360px_1fr]">
            <aside className="border-b border-border p-6 lg:border-b-0 lg:border-r">
              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-accent">
                Odisha Live Map
              </p>
              <h2 className="font-display text-3xl font-bold">
                Latest reported vehicle positions.
              </h2>
              <p className="mt-4 text-sm leading-7 text-silver">
                The district layer is loaded from a local Odisha GeoJSON file. Each vehicle draws
                its operating route in a unique color with a calm marker at the latest reported
                location.
              </p>
              <div className="mt-8 space-y-3">
                {fleet.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="flex items-center justify-between gap-4 rounded-sm border border-border bg-background/45 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="size-3 rounded-full"
                        style={{
                          backgroundColor: vehicle.color,
                        }}
                      />
                      <div>
                        <div className="text-sm font-bold">{vehicle.id}</div>
                        <div className="text-[10px] uppercase tracking-widest text-silver">
                          {vehicle.district}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-silver">{vehicle.signal}</span>
                  </div>
                ))}
              </div>
            </aside>
            <FleetMap vehicles={fleet} />
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-md border border-accent/20 bg-background/55 p-5 backdrop-blur">
      <Icon className="mb-4 size-5 text-accent" />
      <div className="font-display text-3xl font-bold">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-silver">{label}</div>
    </div>
  );
}

function FleetLine({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-4 shrink-0 text-accent" />
      <span>{label}</span>
    </div>
  );
}

function FleetMap({ vehicles }: { vehicles: FleetVehicle[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loadState, setLoadState] = useState("Loading Odisha GeoJSON...");

  const fleetData = useMemo(() => vehicles, [vehicles]);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    async function bootMap() {
      if (!mapRef.current) return;
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      if (disposed || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false,
        center: [20.4, 84.8],
        zoom: 7,
        minZoom: 6,
        maxZoom: 10,
        preferCanvas: true,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      const geoJson = await fetch("/assets/geo/odisha-districts.geojson").then((res) => res.json());
      if (disposed) return;

      const districtLayer = L.geoJSON(geoJson, {
        style: () => ({
          color: "rgba(125, 245, 255, 0.58)",
          weight: 1,
          fillColor: "#071827",
          fillOpacity: 0.48,
        }),
        onEachFeature: (feature, layer) => {
          const district = feature?.properties?.district_name ?? "Odisha district";
          layer.bindTooltip(district, {
            sticky: true,
            className: "tracking-tooltip",
          });
        },
      }).addTo(map);

      map.fitBounds(districtLayer.getBounds(), { padding: [20, 20] });

      fleetData.forEach((vehicle, index) => {
        L.polyline(vehicle.path, {
          color: vehicle.color,
          weight: 3,
          opacity: vehicle.status === "Service" ? 0.42 : 0.74,
          dashArray: vehicle.status === "Service" ? "8 10" : undefined,
        }).addTo(map);

        L.polyline(vehicle.path, {
          color: vehicle.color,
          weight: 9,
          opacity: 0.06,
        }).addTo(map);

        vehicle.path.forEach((point, pointIndex) => {
          L.circleMarker(point, {
            radius: pointIndex === vehicle.path.length - 1 ? 4.5 : 2.8,
            color: vehicle.color,
            fillColor: vehicle.color,
            fillOpacity: pointIndex === vehicle.path.length - 1 ? 0.9 : 0.46,
            weight: 1,
          }).addTo(map);
        });

        const marker = L.marker(vehicle.path[vehicle.path.length - 1], {
          icon: L.divIcon({
            className: "",
            html: `<div class="fleet-marker" style="--fleet-color:${vehicle.color}"><span>${index + 1}</span></div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          }),
        }).addTo(map);

        marker.bindPopup(
          `<strong>${vehicle.name}</strong><br/>${vehicle.routeName}<br/>Status: ${vehicle.status}`,
        );
      });

      setLoadState("Updated now");

      cleanup = () => {
        map.remove();
      };
    }

    bootMap().catch((error) => {
      console.error(error);
      setLoadState("Map unavailable");
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [fleetData]);

  return (
    <div className="relative min-h-[720px] bg-[#050a12]">
      <div ref={mapRef} className="absolute inset-0 tracking-map" />
      <div className="pointer-events-none absolute left-5 top-5 rounded-sm border border-white/10 bg-background/80 px-4 py-3 text-xs uppercase tracking-widest text-silver backdrop-blur">
        <span className="inline-flex items-center gap-2">
          <Wifi className="size-4" /> {loadState}
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-5 right-5 hidden rounded-sm border border-white/10 bg-background/75 p-4 text-xs text-silver backdrop-blur md:block">
        <div className="mb-2 flex items-center gap-2 text-accent">
          <Gauge className="size-4" /> Telemetry
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <span>Refresh</span>
          <span className="text-right">Manual</span>
          <span>Layer</span>
          <span className="text-right">Odisha GeoJSON</span>
          <span>Mode</span>
          <span className="text-right">Latest positions</span>
        </div>
      </div>
    </div>
  );
}
