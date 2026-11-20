import { useEffect, useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "bell"
  | "calendar"
  | "camera"
  | "check"
  | "chevron"
  | "clock"
  | "cloud"
  | "dots"
  | "edit"
  | "grid"
  | "home"
  | "inventory"
  | "mic"
  | "rain"
  | "search"
  | "spark"
  | "sun"
  | "undo"
  | "wallet"
  | "x";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    inventory: (
      <>
        <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
        <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h13" />
        <path d="M16 11h5v4h-5a2 2 0 0 1 0-4Z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    camera: (
      <>
        <path d="M14.5 5 13 3h-2L9.5 5H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: <path d="m5 12 14 0m-6-6 6 6-6 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" />
        <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
      </>
    ),
    undo: (
      <>
        <path d="m9 7-5 5 5 5" />
        <path d="M20 17a8 8 0 0 0-12-5H4" />
      </>
    ),
    edit: (
      <>
        <path d="m14 5 5 5M4 20l4-1 11-11-4-4L4 15z" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    dots: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
    check: <path d="m5 12 4 4L19 6" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </>
    ),
    rain: (
      <>
        <path d="M6 16a4 4 0 0 1 .7-7.9A6 6 0 0 1 18.5 10 3 3 0 0 1 18 16H6Z" />
        <path d="m8 19-1 2M13 19l-1 2M18 19l-1 2" />
      </>
    ),
    cloud: <path d="M6 18a4 4 0 0 1 .7-7.9A6 6 0 0 1 18.5 12 3 3 0 0 1 18 18H6Z" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const profiles = [
  {
    id: "amara",
    name: "Amara",
    business: "Jollof & Hearth",
    type: "Bistro",
    initials: "AA",
    tone: "#e95f35",
    city: "Brooklyn, NY",
  },
  {
    id: "leticia",
    name: "Leticia",
    business: "Verve Streetwear",
    type: "Boutique",
    initials: "LS",
    tone: "#7267e8",
    city: "Los Angeles, CA",
  },
  {
    id: "guillermo",
    name: "Guillermo",
    business: "La Espiga",
    type: "Panadería",
    initials: "GS",
    tone: "#b76f2f",
    city: "San Antonio, TX",
  },
  {
    id: "derrick",
    name: "Derrick",
    business: "Crown & Blade",
    type: "Barbershop",
    initials: "DB",
    tone: "#357b70",
    city: "Atlanta, GA",
  },
];

const backupVendors: Record<string, string> = {
  amara: "Harbor Market Co-op",
  leticia: "Westline Express",
  guillermo: "Mercado Central Supply",
  derrick: "Peachtree Barber Supply",
};

type Order = {
  id: number;
  vendor: string;
  label: string;
  qty: number;
  unit: string;
  price: number;
  days: number;
  hours: number;
  status: "calm" | "amber" | "urgent";
  context: string;
  eventLinked?: boolean;
};

const catalog: Record<
  string,
  {
    orders: Order[];
    inventory: {
      name: string;
      short: string;
      stock: number;
      reorder: number;
      unit: string;
      days: number;
      incoming: number;
      color: string;
    }[];
  }
> = {
  amara: {
    orders: [
      {
        id: 1,
        vendor: "Afi Imports",
        label: "Suya spice blend",
        qty: 18,
        unit: "cases",
        price: 1180,
        days: 6,
        hours: 14,
        status: "calm",
        context: "Pride Parade · +40% foot traffic",
        eventLinked: true,
      },
      {
        id: 2,
        vendor: "Hudson Valley Meats",
        label: "Chicken thighs",
        qty: 80,
        unit: "lb",
        price: 426,
        days: 1,
        hours: 19,
        status: "amber",
        context: "48-hour reminder · Review needed",
      },
      {
        id: 3,
        vendor: "Greenpoint Produce",
        label: "Scotch bonnet & plantain",
        qty: 12,
        unit: "crates",
        price: 318,
        days: 0,
        hours: 9,
        status: "urgent",
        context: "Stock may run out by tonight",
      },
    ],
    inventory: [
      {
        name: "Suya spice",
        short: "SS",
        stock: 24,
        reorder: 18,
        unit: "cases",
        days: 8.2,
        incoming: 18,
        color: "#e86138",
      },
      {
        name: "Chicken thighs",
        short: "CT",
        stock: 92,
        reorder: 105,
        unit: "lb",
        days: 3.1,
        incoming: 80,
        color: "#d5a15f",
      },
      {
        name: "Scotch bonnet",
        short: "SB",
        stock: 8,
        reorder: 14,
        unit: "crates",
        days: 1.4,
        incoming: 12,
        color: "#cf3d37",
      },
      {
        name: "Jasmine rice",
        short: "JR",
        stock: 145,
        reorder: 80,
        unit: "lb",
        days: 10.7,
        incoming: 0,
        color: "#8c9b75",
      },
    ],
  },
  leticia: {
    orders: [
      {
        id: 11,
        vendor: "Northline Apparel",
        label: "Heavyweight hoodies",
        qty: 32,
        unit: "units",
        price: 1536,
        days: 5,
        hours: 8,
        status: "calm",
        context: "Creator mention · Black colorway trending",
        eventLinked: true,
      },
      {
        id: 12,
        vendor: "Marrow Denim",
        label: "Wide-leg denim",
        qty: 24,
        unit: "units",
        price: 984,
        days: 2,
        hours: 2,
        status: "amber",
        context: "48-hour reminder · Review sizing",
      },
      {
        id: 13,
        vendor: "Union Footwear",
        label: "Low-top sneakers",
        qty: 18,
        unit: "pairs",
        price: 1260,
        days: 0,
        hours: 11,
        status: "urgent",
        context: "Sizes 8–10 selling faster",
      },
    ],
    inventory: [
      {
        name: "Core hoodies",
        short: "HD",
        stock: 21,
        reorder: 28,
        unit: "units",
        days: 3.8,
        incoming: 32,
        color: "#6d65d8",
      },
      {
        name: "Wide-leg denim",
        short: "DN",
        stock: 17,
        reorder: 20,
        unit: "units",
        days: 4.2,
        incoming: 24,
        color: "#446782",
      },
      {
        name: "Low-top sneaker",
        short: "SN",
        stock: 9,
        reorder: 16,
        unit: "pairs",
        days: 1.8,
        incoming: 18,
        color: "#c35b45",
      },
      {
        name: "Logo caps",
        short: "CP",
        stock: 46,
        reorder: 18,
        unit: "units",
        days: 12.1,
        incoming: 0,
        color: "#658673",
      },
    ],
  },
  guillermo: {
    orders: [
      {
        id: 21,
        vendor: "Molino del Sol",
        label: "Bread flour",
        qty: 24,
        unit: "sacks",
        price: 792,
        days: 4,
        hours: 10,
        status: "calm",
        context: "Día de Muertos pre-orders · +32%",
        eventLinked: true,
      },
      {
        id: 22,
        vendor: "Lone Star Dairy",
        label: "Cultured butter",
        qty: 16,
        unit: "cases",
        price: 608,
        days: 1,
        hours: 22,
        status: "amber",
        context: "48-hour reminder · Price up 4%",
      },
      {
        id: 23,
        vendor: "Dulce Wholesale",
        label: "Cane sugar",
        qty: 10,
        unit: "bags",
        price: 284,
        days: 0,
        hours: 7,
        status: "urgent",
        context: "Concha batch starts tomorrow",
      },
    ],
    inventory: [
      {
        name: "Bread flour",
        short: "HF",
        stock: 19,
        reorder: 22,
        unit: "sacks",
        days: 3.4,
        incoming: 24,
        color: "#b67537",
      },
      {
        name: "Butter",
        short: "BT",
        stock: 11,
        reorder: 14,
        unit: "cases",
        days: 2.8,
        incoming: 16,
        color: "#d3a740",
      },
      {
        name: "Cane sugar",
        short: "AZ",
        stock: 6,
        reorder: 9,
        unit: "bags",
        days: 1.6,
        incoming: 10,
        color: "#bd5540",
      },
      {
        name: "Piloncillo",
        short: "PL",
        stock: 28,
        reorder: 12,
        unit: "cases",
        days: 11.2,
        incoming: 0,
        color: "#76654e",
      },
    ],
  },
  derrick: {
    orders: [
      {
        id: 31,
        vendor: "Heritage Grooming Co.",
        label: "Matte pomade",
        qty: 36,
        unit: "jars",
        price: 432,
        days: 5,
        hours: 17,
        status: "calm",
        context: "Wedding weekend · +22% bookings",
        eventLinked: true,
      },
      {
        id: 32,
        vendor: "Apex Barber Supply",
        label: "Straight razors",
        qty: 12,
        unit: "boxes",
        price: 276,
        days: 1,
        hours: 16,
        status: "amber",
        context: "48-hour reminder · Review needed",
      },
      {
        id: 33,
        vendor: "Root & Ritual",
        label: "Beard oil",
        qty: 24,
        unit: "bottles",
        price: 336,
        days: 0,
        hours: 10,
        status: "urgent",
        context: "Retail shelf runs low today",
      },
    ],
    inventory: [
      {
        name: "Matte pomade",
        short: "MP",
        stock: 22,
        reorder: 26,
        unit: "jars",
        days: 4.1,
        incoming: 36,
        color: "#377d70",
      },
      {
        name: "Straight razors",
        short: "RZ",
        stock: 9,
        reorder: 11,
        unit: "boxes",
        days: 3.2,
        incoming: 12,
        color: "#566e84",
      },
      {
        name: "Beard oil",
        short: "BO",
        stock: 7,
        reorder: 14,
        unit: "bottles",
        days: 1.7,
        incoming: 24,
        color: "#c05e3f",
      },
      {
        name: "Neck strips",
        short: "NS",
        stock: 34,
        reorder: 18,
        unit: "rolls",
        days: 9.8,
        incoming: 0,
        color: "#8b9270",
      },
    ],
  },
};

const days = [
  { day: "MON", date: "12", icon: "sun" as IconName, temp: "74°", note: "Steady" },
  { day: "TUE", date: "13", icon: "cloud" as IconName, temp: "69°", note: "Steady" },
  { day: "WED", date: "14", icon: "rain" as IconName, temp: "64°", note: "–8%" },
  { day: "THU", date: "15", icon: "sun" as IconName, temp: "76°", note: "+12%" },
  { day: "FRI", date: "16", icon: "sun" as IconName, temp: "80°", note: "+18%" },
  { day: "SAT", date: "17", icon: "spark" as IconName, temp: "78°", note: "+40%", event: true },
  { day: "SUN", date: "18", icon: "sun" as IconName, temp: "75°", note: "+24%" },
];

function CountdownRing({ days, hours, status }: { days: number; hours: number; status: string }) {
  const total = days * 24 + hours;
  const progress = Math.max(0.08, total / (7 * 24));
  const dash = `${progress * 264} 264`;
  return (
    <div className={`countdown ${status}`}>
      <svg viewBox="0 0 96 96">
        <circle className="track" cx="48" cy="48" r="42" />
        <circle className="value" cx="48" cy="48" r="42" strokeDasharray={dash} />
      </svg>
      <div className="countdown-copy">
        <strong>
          {days}d {hours}h
        </strong>
        <span>until sent</span>
      </div>
    </div>
  );
}

function App() {
  const [profileId, setProfileId] = useState("amara");
  const [ordersByProfile, setOrdersByProfile] = useState(() =>
    Object.fromEntries(Object.entries(catalog).map(([key, val]) => [key, val.orders])),
  );
  const [forecastOn, setForecastOn] = useState(true);
  const [activeView, setActiveView] = useState("Pulse");
  const [captureOpen, setCaptureOpen] = useState(false);
  const [captureMode, setCaptureMode] = useState<"scan" | "voice">("scan");
  const [scanStage, setScanStage] = useState<"idle" | "scanning" | "done">("idle");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState<"EN" | "ES">("EN");
  const [toast, setToast] = useState("");
  const [threshold, setThreshold] = useState(72);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [demandLift, setDemandLift] = useState(40);
  const [payroll, setPayroll] = useState(5200);
  const [cash, setCash] = useState(12450);
  const [stockAdjustments, setStockAdjustments] = useState<Record<string, number>>({});
  const [scenarioOpen, setScenarioOpen] = useState(false);
  const [scenarioStage, setScenarioStage] = useState<
    "idle" | "investigating" | "ready" | "approved" | "reversed"
  >("idle");
  const [scenarioOriginal, setScenarioOriginal] = useState<{
    profileId: string;
    order: Order;
  } | null>(null);
  const [agentActions, setAgentActions] = useState<string[]>([]);

  const profile = profiles.find((p) => p.id === profileId)!;
  const backupVendor = backupVendors[profileId];
  const orders = ordersByProfile[profileId];
  const inventory = catalog[profileId].inventory.map((item) => ({
    ...item,
    stock: item.stock + (stockAdjustments[`${profileId}-${item.name}`] ?? 0),
  }));

  const displayOrders = useMemo(
    () =>
      orders.map((order) => ({
        ...order,
        displayQty:
          order.eventLinked && forecastOn
            ? Math.round(order.qty * (1 + demandLift / 100))
            : order.qty,
      })),
    [orders, forecastOn, demandLift],
  );

  const committed = displayOrders.reduce((sum, order) => sum + order.price, 0);
  const reservedPercent = Math.round(((payroll + committed) / cash) * 100);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const notify = (message: string) => {
    if ("vibrate" in navigator) navigator.vibrate(18);
    setToast(message);
  };

  const removeOrder = (id: number) => {
    setOrdersByProfile((current) => ({
      ...current,
      [profileId]: current[profileId].filter((o) => o.id !== id),
    }));
    notify("Order paused — you can restore it for 10 seconds");
  };

  const modifyOrder = (id: number) => {
    setOrdersByProfile((current) => ({
      ...current,
      [profileId]: current[profileId].map((o) => (o.id === id ? { ...o, qty: o.qty + 2 } : o)),
    }));
    notify("Quantity increased by 2 — draft updated");
  };

  const moveOrder = (id: number) => {
    setOrdersByProfile((current) => ({
      ...current,
      [profileId]: current[profileId].map((o) =>
        o.id === id
          ? { ...o, days: Math.min(6, o.days + 1), hours: 9, status: "calm" as const }
          : o,
      ),
    }));
    notify("Dispatch moved one day later");
  };

  const dispatchOrder = (id: number) => {
    const target = orders.find((o) => o.id === id);
    notify(`${target?.vendor ?? "Order"} sent to supplier`);
    setOrdersByProfile((current) => ({
      ...current,
      [profileId]: current[profileId].filter((o) => o.id !== id),
    }));
  };

  const adjustStock = (name: string, amount: number) => {
    const key = `${profileId}-${name}`;
    setStockAdjustments((current) => ({ ...current, [key]: (current[key] ?? 0) + amount }));
    notify(`${name} count ${amount > 0 ? "increased" : "decreased"} by ${Math.abs(amount)}`);
  };

  const openAgentScenario = () => {
    setScenarioOpen(true);
    if (scenarioStage === "reversed") {
      setScenarioStage("idle");
      setAgentActions([]);
    }
  };

  const investigateSupplyIssue = () => {
    setScenarioStage("investigating");
    setAgentActions(["Checked current stock and today’s sales pace"]);
    window.setTimeout(() => {
      setAgentActions([
        "Confirmed the original supplier is out of stock",
        "Checked two local suppliers for same-day availability",
        "Protected payroll reserve and compared total cost",
      ]);
      setScenarioStage("ready");
    }, 1400);
  };

  const approveAgentAction = () => {
    const target = orders[orders.length - 1];
    if (!target) return;
    setScenarioOriginal({ profileId, order: { ...target } });
    setOrdersByProfile((current) => ({
      ...current,
      [profileId]: current[profileId].map((order) =>
        order.id === target.id
          ? {
              ...order,
              vendor: backupVendor,
              price: order.price + 42,
              days: 0,
              hours: 1,
              status: "calm" as const,
              context: "Backup confirmed · delivery today by 4 PM",
            }
          : order,
      ),
    }));
    setAgentActions([
      "Purchase order PO-1042 updated in the order record",
      `Supplier message sent to ${backupVendor}`,
      `${target.vendor} draft paused — no duplicate order`,
    ]);
    setScenarioStage("approved");
    notify("PO-1042 updated and sent — owner approval recorded");
  };

  const reverseAgentAction = () => {
    if (!scenarioOriginal) return;
    setOrdersByProfile((current) => ({
      ...current,
      [scenarioOriginal.profileId]: current[scenarioOriginal.profileId].map((order) =>
        order.id === scenarioOriginal.order.id ? scenarioOriginal.order : order,
      ),
    }));
    setAgentActions([
      "Supplier message cancelled before fulfillment",
      "PO-1042 restored to the original supplier",
      "Owner reversal recorded in the activity log",
    ]);
    setScenarioStage("reversed");
    notify("Agent action reversed — original draft restored");
  };

  const startScan = () => {
    setScanStage("scanning");
    window.setTimeout(() => setScanStage("done"), 1500);
  };

  const toggleListening = () => {
    setListening((current) => !current);
    if (!listening) {
      window.setTimeout(() => setListening(false), 3500);
    }
  };

  const navItems = [
    { label: "Pulse", icon: "home" as IconName },
    { label: "Inventory", icon: "inventory" as IconName },
    { label: "Forecast", icon: "grid" as IconName },
    { label: "Cash flow", icon: "wallet" as IconName },
  ];

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileNavOpen ? "open" : ""}`}>
        <button className="brand" onClick={() => setActiveView("Pulse")}>
          <span>m</span>mise
        </button>
        <nav>
          <span className="nav-label">WORKSPACE</span>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={activeView === item.label ? "active" : ""}
              onClick={() => {
                setActiveView(item.label);
                setMobileNavOpen(false);
              }}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.label === "Pulse" && <i>3</i>}
            </button>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="time-saved">
            <Icon name="spark" />
            <div>
              <strong>9.4 hours</strong>
              <span>saved this week</span>
            </div>
          </div>
          <button className="support">
            Need a hand? <span>Chat with us</span>
          </button>
        </div>
      </aside>

      <main>
        <header id="mobile-safe-header">
          <style>{`
            @media (max-width: 820px) {
              #mobile-safe-header {
                height: 74px;
                padding-top: 10px;
              }
            }
          `}</style>
          <button className="mobile-brand" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <span>m</span>mise
          </button>
          <div className="search">
            <input aria-label="Search" placeholder="Search stock, orders, suppliers…" />
            <kbd>⌘ K</kbd>
          </div>
          <div className="header-actions">
            <button className="bell" aria-label="Notifications">
              <i />
            </button>
            <button
              className="profile-button"
              onClick={() => {
                const next =
                  profiles[(profiles.findIndex((p) => p.id === profileId) + 1) % profiles.length];
                setProfileId(next.id);
                notify(`Switched to ${next.business}`);
              }}
            >
              <span style={{ background: profile.tone }}>{profile.initials}</span>
              <div>
                <strong>{profile.name}</strong>
                <small>{profile.business}</small>
              </div>
              <Icon name="chevron" size={15} />
            </button>
          </div>
        </header>

        {activeView === "Pulse" && (
          <div className="dashboard">
            <div className="page-fold pulse-fold">
              <section className="welcome" style={{ marginBottom: 16 }}>
                <div>
                  <p className="page-kicker">Monday, May 12</p>
                  <h1 className="pulse-attention-title" style={{ fontSize: 40 }}>
                    {displayOrders.filter((order) => order.status === "urgent").length}{" "}
                    {displayOrders.filter((order) => order.status === "urgent").length === 1
                      ? "order"
                      : "orders"}{" "}
                    {displayOrders.filter((order) => order.status === "urgent").length === 1
                      ? "needs"
                      : "need"}{" "}
                    attention today
                  </h1>
                </div>
                <div className="sync-status">
                  <div>
                    <strong>Supplier issue confirmed</strong>
                    <small>This order needs a decision</small>
                  </div>
                </div>
              </section>

              {displayOrders.length > 0 && (
                <section
                  className="pulse-priority"
                  style={{
                    border: "1px solid #e0ded5",
                    borderRadius: 14,
                    padding: "28px 30px",
                    background: "#ffffff",
                    boxShadow: "0 10px 30px rgba(31, 37, 33, 0.06)",
                  }}
                >
                  <div>
                    <h2>{displayOrders[displayOrders.length - 1].label}</h2>
                    <p>
                      {displayOrders[displayOrders.length - 1].vendor} ·{" "}
                      {displayOrders[displayOrders.length - 1].displayQty}{" "}
                      {displayOrders[displayOrders.length - 1].unit}
                    </p>
                  </div>
                  <div className="priority-time">
                    <strong>
                      {displayOrders[displayOrders.length - 1].days}d{" "}
                      {displayOrders[displayOrders.length - 1].hours}h
                    </strong>
                    <span>until it sends</span>
                  </div>
                  <button onClick={openAgentScenario}>Review order</button>
                </section>
              )}

              <section className="pulse-summary">
                <div>
                  <span>Orders in preview</span>
                  <strong>{displayOrders.length}</strong>
                </div>
                <div>
                  <span>Items needing care</span>
                  <strong>2</strong>
                </div>
                <div>
                  <span>Committed this week</span>
                  <strong>${committed.toLocaleString()}</strong>
                </div>
              </section>
            </div>

            <div className="content-grid pulse-detail">
              <section className="panel orders-panel">
                <div className="panel-heading">
                  <div>
                    <div className="title-row">
                      <h2>Upcoming orders</h2>
                      <span id="mobile-order-preview-count">
                        <style>{`
                          @media (max-width: 560px) {
                            #mobile-order-preview-count {
                              background: transparent;
                              border-radius: 0;
                              color: #737973;
                              font-size: 12px;
                              font-weight: 500;
                              padding: 0;
                            }
                          }
                        `}</style>
                        {displayOrders.length} orders in preview
                      </span>
                    </div>
                    <p>Nothing sends without your 7-day review window.</p>
                  </div>
                  <button className="text-button">
                    View all <Icon name="arrow" size={15} />
                  </button>
                </div>
                <div className="order-list">
                  {displayOrders.map((order) => (
                    <article className="order-card" key={order.id}>
                      <CountdownRing days={order.days} hours={order.hours} status={order.status} />
                      <div className="order-main">
                        <div className="order-top">
                          <div>
                            <span className="vendor">{order.vendor}</span>
                            <h3>{order.label}</h3>
                            <p>
                              <strong>
                                {order.displayQty} {order.unit}
                              </strong>{" "}
                              · ${order.price.toLocaleString()}
                            </p>
                          </div>
                          <button className="more" aria-label="More options">
                            <Icon name="dots" />
                          </button>
                        </div>
                        <div className={`context-chip ${order.status}`}>
                          <Icon
                            name={
                              order.eventLinked
                                ? "spark"
                                : order.status === "urgent"
                                  ? "clock"
                                  : "bell"
                            }
                            size={14}
                          />
                          {order.context}
                        </div>
                        <div className="order-actions">
                          <button onClick={() => removeOrder(order.id)}>
                            <Icon name="undo" size={15} /> Undo
                          </button>
                          <button onClick={() => modifyOrder(order.id)}>
                            <Icon name="edit" size={15} /> Modify
                          </button>
                          <button onClick={() => moveOrder(order.id)}>
                            <Icon name="calendar" size={15} /> Move date
                          </button>
                          <button className="dispatch" onClick={() => dispatchOrder(order.id)}>
                            Dispatch now <Icon name="arrow" size={15} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                  {displayOrders.length === 0 && (
                    <div className="empty-state">
                      <span>
                        <Icon name="check" />
                      </span>
                      <h3>Queue is clear</h3>
                      <p>All upcoming orders have been handled.</p>
                    </div>
                  )}
                </div>
              </section>

              <aside className="right-column" id="pulse-context-details">
                <style>{`
                  #pulse-context-details .panel-heading p,
                  #pulse-context-details .forecast-story p,
                  #pulse-context-details .cash-numbers span,
                  #pulse-context-details .threshold span,
                  #pulse-context-details .guardrail-note span {
                    font-size: 11px;
                  }
                  #pulse-context-details .title-row > span,
                  #pulse-context-details .week-strip span,
                  #pulse-context-details .week-strip small,
                  #pulse-context-details .week-strip b,
                  #pulse-context-details .forecast-story span,
                  #pulse-context-details .forecast-story button,
                  #pulse-context-details .bar-labels span {
                    font-size: 9px;
                  }
                  #pulse-context-details .week-strip strong {
                    font-size: 14px;
                  }
                `}</style>
                <section className="panel context-panel">
                  <div className="panel-heading compact">
                    <div>
                      <div className="title-row">
                        <h2>Week ahead</h2>
                        <span className="context-live">
                          <i /> Context on
                        </span>
                      </div>
                      <p>{profile.city} · Demand signals</p>
                    </div>
                    <button
                      className={`switch ${forecastOn ? "on" : ""}`}
                      onClick={() => {
                        setForecastOn(!forecastOn);
                        notify(
                          forecastOn
                            ? "Event adjustment removed from draft order"
                            : "Event adjustment added to draft order",
                        );
                      }}
                      aria-label="Toggle context forecast"
                    >
                      <i />
                    </button>
                  </div>
                  <div className="week-strip">
                    {days.map((day) => (
                      <div key={day.day} className={day.event ? "event" : ""}>
                        <span>{day.day}</span>
                        <strong>{day.date}</strong>
                        <Icon name={day.icon} size={17} />
                        <small>{day.temp}</small>
                        <b>{day.note}</b>
                      </div>
                    ))}
                  </div>
                  <div className="forecast-story">
                    <div className="story-icon">
                      <Icon name="spark" />
                    </div>
                    <div>
                      <span>SATURDAY SIGNAL</span>
                      <h3>Pride Parade will pass 2 blocks away.</h3>
                      <p>
                        Expect a longer dinner rush. We’ve added{" "}
                        <strong>
                          40% more {displayOrders[0]?.label.toLowerCase() ?? "core stock"}
                        </strong>{" "}
                        to your draft order.
                      </p>
                      <button onClick={() => setForecastOn(!forecastOn)}>
                        {forecastOn ? "Remove adjustment" : "Apply adjustment"}{" "}
                        <Icon name="arrow" size={14} />
                      </button>
                    </div>
                  </div>
                </section>

                <section className="panel cash-panel">
                  <div className="panel-heading compact">
                    <div>
                      <h2>Cash-flow guardrail</h2>
                      <p>What’s committed before payroll</p>
                    </div>
                    <button className="more">
                      <Icon name="dots" />
                    </button>
                  </div>
                  <div className="cash-numbers">
                    <div>
                      <span>Available</span>
                      <strong>${cash.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span>After orders + payroll</span>
                      <strong>${(cash - committed - payroll).toLocaleString()}</strong>
                    </div>
                  </div>
                  <div className="guardrail">
                    <div className="guardrail-bar">
                      <span className="orders" style={{ width: `${(committed / cash) * 100}%` }} />
                      <span className="payroll" style={{ width: `${(payroll / cash) * 100}%` }} />
                      <i style={{ left: `${threshold}%` }} />
                    </div>
                    <div className="bar-labels">
                      <span>
                        <i className="orders-key" /> Orders
                      </span>
                      <span>
                        <i className="payroll-key" /> Payroll reserve
                      </span>
                    </div>
                  </div>
                  <label className="threshold">
                    <span>Alert me when commitments reach</span>
                    <strong>{threshold}%</strong>
                    <input
                      type="range"
                      min="55"
                      max="90"
                      value={threshold}
                      onChange={(e) => setThreshold(Number(e.target.value))}
                    />
                  </label>
                  <div className={`guardrail-note ${reservedPercent > threshold ? "warning" : ""}`}>
                    <Icon name={reservedPercent > threshold ? "bell" : "check"} size={16} />
                    <span>
                      {reservedPercent > threshold
                        ? "You’re above your chosen alert point. Consider moving an order."
                        : `You have $${(cash - committed - payroll).toLocaleString()} of comfortable room this week.`}
                    </span>
                  </div>
                </section>
              </aside>
            </div>

            <section className="panel inventory-panel" id="pulse-inventory-outlook">
              <style>{`
                #pulse-inventory-outlook .panel-heading p {
                  font-size: 12px;
                }
                #pulse-inventory-outlook .title-row > span,
                #pulse-inventory-outlook .inventory-head,
                #pulse-inventory-outlook .inventory-row,
                #pulse-inventory-outlook .inventory-row span,
                #pulse-inventory-outlook .inventory-row small,
                #pulse-inventory-outlook .outlook small,
                #pulse-inventory-outlook .status-pill {
                  font-size: 10px;
                }
                #pulse-inventory-outlook .item-name strong {
                  font-size: 13px;
                }
              `}</style>
              <div className="panel-heading">
                <div>
                  <div className="title-row">
                    <h2>Inventory outlook</h2>
                    <span>Next 7 days</span>
                  </div>
                  <p>What’s on hand, what’s coming, and what needs attention.</p>
                </div>
                <button className="text-button">
                  Full inventory <Icon name="arrow" size={15} />
                </button>
              </div>
              <div className="inventory-table">
                <div className="inventory-head">
                  <span>ITEM</span>
                  <span>ON HAND</span>
                  <span>REORDER AT</span>
                  <span>DAYS LEFT</span>
                  <span>7-DAY OUTLOOK</span>
                  <span>STATUS</span>
                </div>
                {inventory.map((item, i) => {
                  const risky = item.stock < item.reorder;
                  const projected = Math.max(
                    8,
                    Math.min(96, ((item.stock + item.incoming) / (item.reorder * 2.4)) * 100),
                  );
                  return (
                    <div className="inventory-row" key={item.name}>
                      <div className="item-name">
                        <span style={{ background: `${item.color}18`, color: item.color }}>
                          {item.short}
                        </span>
                        <div>
                          <strong>{item.name}</strong>
                          <small>{item.unit}</small>
                        </div>
                      </div>
                      <strong>
                        {item.stock} <small>{item.unit}</small>
                      </strong>
                      <span>
                        {item.reorder} {item.unit}
                      </span>
                      <strong className={item.days < 3 ? "low" : ""}>{item.days} days</strong>
                      <div className="outlook">
                        <div>
                          <span style={{ width: `${projected}%`, background: item.color }} />
                        </div>
                        <small>
                          {item.incoming ? `+${item.incoming} arriving` : "No order needed"}
                        </small>
                      </div>
                      <span
                        className={`status-pill ${risky ? (i === 2 ? "urgent" : "watch") : "healthy"}`}
                      >
                        {risky ? (i === 2 ? "Act today" : "Watch") : "Healthy"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {activeView === "Inventory" && (
          <div className="dashboard workspace-page">
            <div className="page-fold">
              <section className="page-hero">
                <div>
                  <p className="page-kicker">Inventory</p>
                  <h1>Your stock, at a glance.</h1>
                  <p>Two items need your attention. Everything else is covered for the week.</p>
                </div>
                <button className="page-primary" onClick={() => setCaptureOpen(true)}>
                  Update a count
                </button>
              </section>

              <section className="page-stat-grid">
                <article className="priority-stat">
                  <span>Needs attention</span>
                  <strong className="amber-text">
                    {inventory.filter((item) => item.stock < item.reorder).length} items
                  </strong>
                  <small>Below their reorder point</small>
                </article>
                <article>
                  <span>Coming this week</span>
                  <strong>{inventory.reduce((sum, item) => sum + item.incoming, 0)} units</strong>
                  <small>Already included in your outlook</small>
                </article>
                <article>
                  <span>Average coverage</span>
                  <strong>
                    {(
                      inventory.reduce((sum, item) => sum + item.days, 0) / inventory.length
                    ).toFixed(1)}{" "}
                    days
                  </strong>
                  <small>Across all tracked stock</small>
                </article>
              </section>
            </div>

            <section className="panel inventory-page-panel">
              <div className="panel-heading">
                <div>
                  <div className="title-row">
                    <h2>Stock room</h2>
                  </div>
                  <p>Adjust a count and the outlook updates immediately.</p>
                </div>
              </div>
              <div className="inventory-cards">
                {inventory.map((item, i) => {
                  const risky = item.stock < item.reorder;
                  const fill = Math.max(
                    5,
                    Math.min(100, (item.stock / (item.reorder * 1.8)) * 100),
                  );
                  return (
                    <article className="stock-card" key={item.name}>
                      <div className="stock-card-top">
                        <h3>{item.name}</h3>
                        <span
                          className={`status-pill ${risky ? (i === 2 ? "urgent" : "watch") : "healthy"}`}
                        >
                          {risky ? (i === 2 ? "Act today" : "Watch") : "Healthy"}
                        </span>
                      </div>
                      <div className="stock-count">
                        <strong>{item.stock}</strong>
                        <span>{item.unit} on hand</span>
                      </div>
                      <div className="stock-progress">
                        <span style={{ width: `${fill}%`, background: item.color }} />
                      </div>
                      <div className="stock-details">
                        <span>
                          Reorder at <b>{item.reorder}</b>
                        </span>
                        <span>
                          <b>{item.days}</b> days left
                        </span>
                      </div>
                      <div className="stock-arrival">
                        {item.incoming ? (
                          <span>
                            <b>
                              {item.incoming} {item.unit}
                            </b>{" "}
                            arriving this week
                          </span>
                        ) : (
                          <span>No order needed</span>
                        )}
                      </div>
                      <div className="count-stepper">
                        <button onClick={() => adjustStock(item.name, -1)}>−</button>
                        <span>Adjust count</span>
                        <button onClick={() => adjustStock(item.name, 1)}>+</button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {activeView === "Forecast" && (
          <div className="dashboard workspace-page">
            <div className="page-fold">
              <section className="page-hero">
                <div className="forecast-ai-insight">
                  <span className="forecast-ai-star" aria-hidden="true">
                    <Icon name="spark" size={18} />
                  </span>
                  <p className="forecast-ai-label">AI-generated forecast · {profile.city}</p>
                  <h1 style={{ fontSize: 40 }}>Saturday will be busier.</h1>
                  <p>
                    The Pride Parade passes two blocks away. Expect roughly {demandLift}% more
                    demand.
                  </p>
                </div>
                <div className="forecast-master">
                  <span>
                    <b>Use this forecast</b>
                    <small>
                      {forecastOn ? "Draft orders are updating" : "Adjustments are paused"}
                    </small>
                  </span>
                  <button
                    className={`switch ${forecastOn ? "on" : ""}`}
                    onClick={() => setForecastOn(!forecastOn)}
                  >
                    <i />
                  </button>
                </div>
              </section>
              <section className="forecast-focus">
                <div>
                  <span>Saturday</span>
                  <strong>+{demandLift}%</strong>
                  <p>Expected demand</p>
                </div>
                <div>
                  <span>Linked order</span>
                  <strong>
                    {displayOrders[0]?.displayQty ?? 0} {orders[0]?.unit}
                  </strong>
                  <p>{displayOrders[0]?.label ?? "Core stock"}</p>
                </div>
                <label>
                  <span>Adjust the lift</span>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    step="5"
                    value={demandLift}
                    onChange={(e) => setDemandLift(Number(e.target.value))}
                  />
                </label>
              </section>
            </div>

            <section className="panel forecast-calendar">
              <div className="panel-heading">
                <div>
                  <div className="title-row">
                    <h2>Seven-day demand outlook</h2>
                  </div>
                  <p>Weather and neighborhood activity for May 12–18.</p>
                </div>
              </div>
              <div className="forecast-days">
                {days.map((day, i) => (
                  <article key={day.day} className={day.event ? "event" : i === 2 ? "rainy" : ""}>
                    <div>
                      <span>{day.day}</span>
                      <strong>May {day.date}</strong>
                    </div>
                    <Icon name={day.icon} size={25} />
                    <b>{day.temp}</b>
                    <small>
                      {i === 2
                        ? "Rain after 4 PM"
                        : day.event
                          ? "Pride Parade"
                          : i > 3
                            ? "Dinner rush"
                            : "Normal trade"}
                    </small>
                    <em>{day.note} demand</em>
                  </article>
                ))}
              </div>
            </section>

            <div className="forecast-grid">
              <section className="panel signal-panel">
                <div className="panel-heading compact">
                  <div>
                    <h2>Signals shaping the week</h2>
                    <p>Plain-English reasons behind the forecast</p>
                  </div>
                </div>
                <div className="signal-list">
                  <article>
                    <div>
                      <span>Saturday</span>
                      <h3>Pride Parade, two blocks away</h3>
                      <p>
                        Last year’s parade lifted dinner covers by 38%. This year’s route is closer.
                      </p>
                    </div>
                    <b>+{demandLift}%</b>
                  </article>
                  <article>
                    <div>
                      <span>Wednesday</span>
                      <h3>Rain will soften walk-in traffic</h3>
                      <p>Plan for a quieter evening, but delivery orders should stay steady.</p>
                    </div>
                    <b className="down">−8%</b>
                  </article>
                  <article>
                    <div>
                      <span>Your recent Fridays</span>
                      <h3>Friday dinner is getting busier</h3>
                      <p>You’ve sold 12% more of your core items each Friday this month.</p>
                    </div>
                    <b>+12%</b>
                  </article>
                </div>
              </section>
              <section className="panel adjustment-panel">
                <div className="panel-heading compact">
                  <div>
                    <h2>Event adjustment</h2>
                    <p>Choose how much extra demand to prepare for</p>
                  </div>
                </div>
                <div className="adjustment-body">
                  <div className="lift-number">
                    <strong>+{demandLift}%</strong>
                    <span>Saturday demand</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    step="5"
                    value={demandLift}
                    onChange={(e) => setDemandLift(Number(e.target.value))}
                  />
                  <div className="range-labels">
                    <span>No lift</span>
                    <span>Strong lift</span>
                  </div>
                  <div className="linked-order">
                    <span>Linked draft order</span>
                    <h3>{displayOrders[0]?.label ?? "Core stock"}</h3>
                    <p>
                      {orders[0]?.qty ?? 0} →{" "}
                      <strong>
                        {displayOrders[0]?.displayQty ?? 0} {orders[0]?.unit}
                      </strong>
                    </p>
                  </div>
                  <button
                    className="page-primary full"
                    onClick={() => notify("Forecast preference saved to your draft orders")}
                  >
                    Save forecast preference
                  </button>
                </div>
              </section>
            </div>
          </div>
        )}

        {activeView === "Cash flow" && (
          <div className="dashboard workspace-page">
            <div className="page-fold">
              <section className="page-hero">
                <div>
                  <p className="page-kicker">Cash flow</p>
                  <h1 style={{ fontSize: 40 }}>You have room this week.</h1>
                  <p>Your supplier orders and payroll are covered, with cash left over.</p>
                </div>
              </section>

              <section className="cash-hero">
                <div className="cash-hero-copy">
                  <span>Left after orders and payroll</span>
                  <strong>${(cash - committed - payroll).toLocaleString()}</strong>
                  <p>
                    {reservedPercent > threshold
                      ? "Your commitments cross the alert line. Move or trim an order to create more room."
                      : "You have comfortable room this week. No order puts payroll at risk."}
                  </p>
                </div>
                <div
                  className="cash-ring"
                  style={
                    {
                      "--cash-angle": `${Math.min(100, reservedPercent) * 3.6}deg`,
                    } as React.CSSProperties
                  }
                >
                  <div>
                    <strong>{reservedPercent}%</strong>
                    <span>committed</span>
                  </div>
                </div>
                <div className="cash-breakdown">
                  <div>
                    <span>Available cash</span>
                    <strong>${cash.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span>Supplier orders</span>
                    <strong>−${committed.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span>Payroll reserve</span>
                    <strong>−${payroll.toLocaleString()}</strong>
                  </div>
                </div>
              </section>
            </div>

            <div className="cash-page-grid">
              <section className="panel timeline-panel">
                <div className="panel-heading">
                  <div>
                    <h2>When cash leaves</h2>
                    <p>Move a draft order to change the week’s pressure.</p>
                  </div>
                </div>
                <div className="cash-timeline">
                  {days.map((day, i) => {
                    const dayOrder = displayOrders.find((order) => Math.min(6, order.days) === i);
                    return (
                      <div className={`timeline-day ${dayOrder ? "has-order" : ""}`} key={day.day}>
                        <div className="timeline-date">
                          <span>{day.day}</span>
                          <strong>{day.date}</strong>
                        </div>
                        <div className="timeline-line">
                          <i />
                        </div>
                        <div className="timeline-event">
                          {dayOrder ? (
                            <>
                              <span>Draft payment</span>
                              <h3>{dayOrder.vendor}</h3>
                              <p>
                                −${dayOrder.price.toLocaleString()} · {dayOrder.label}
                              </p>
                              <button onClick={() => moveOrder(dayOrder.id)}>
                                Move one day later
                              </button>
                            </>
                          ) : (
                            <>
                              <span>No payments</span>
                              <p>Cash stays in your account</p>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
              <aside className="cash-controls">
                <section className="panel control-card">
                  <div className="panel-heading compact">
                    <div>
                      <h2>Weekly inputs</h2>
                      <p>Test a different cash scenario</p>
                    </div>
                  </div>
                  <label>
                    <span>Available operating cash</span>
                    <div>
                      $
                      <input
                        type="number"
                        value={cash}
                        onChange={(e) => setCash(Math.max(0, Number(e.target.value)))}
                      />
                    </div>
                  </label>
                  <label>
                    <span>Payroll reserve</span>
                    <div>
                      $
                      <input
                        type="number"
                        value={payroll}
                        onChange={(e) => setPayroll(Math.max(0, Number(e.target.value)))}
                      />
                    </div>
                  </label>
                </section>
                <section className="panel control-card">
                  <div className="panel-heading compact">
                    <div>
                      <h2>Alert threshold</h2>
                      <p>We’ll warn you before commitments get here</p>
                    </div>
                  </div>
                  <div className="threshold-large">
                    <strong>{threshold}%</strong>
                    <input
                      type="range"
                      min="55"
                      max="90"
                      value={threshold}
                      onChange={(e) => setThreshold(Number(e.target.value))}
                    />
                    <div>
                      <span>More cautious</span>
                      <span>More flexible</span>
                    </div>
                  </div>
                  <div className={`guardrail-note ${reservedPercent > threshold ? "warning" : ""}`}>
                    <Icon name={reservedPercent > threshold ? "bell" : "check"} size={16} />
                    <span>
                      {reservedPercent > threshold
                        ? "Current commitments are above this alert point."
                        : "Current commitments are safely below this point."}
                    </span>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        )}

        <nav className="mobile-tabs">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={activeView === item.label ? "active" : ""}
              onClick={() => setActiveView(item.label)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </main>

      {captureOpen && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => e.target === e.currentTarget && setCaptureOpen(false)}
        >
          <section
            className="capture-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Quick capture"
          >
            <div className="modal-head">
              <div>
                <span className="eyebrow">QUICK CAPTURE</span>
                <h2>Update stock in seconds.</h2>
                <p>Use a paper invoice or simply tell mise what changed.</p>
              </div>
              <button onClick={() => setCaptureOpen(false)} aria-label="Close">
                <Icon name="x" />
              </button>
            </div>
            <div className="capture-tabs">
              <button
                className={captureMode === "scan" ? "active" : ""}
                onClick={() => setCaptureMode("scan")}
              >
                <Icon name="camera" /> Scan invoice
              </button>
              <button
                className={captureMode === "voice" ? "active" : ""}
                onClick={() => setCaptureMode("voice")}
              >
                <Icon name="mic" /> Voice count
              </button>
            </div>
            {captureMode === "scan" ? (
              <div className="scan-content">
                {scanStage === "done" ? (
                  <div className="scan-results">
                    <div className="result-success">
                      <span>
                        <Icon name="check" />
                      </span>
                      <div>
                        <strong>3 items found</strong>
                        <small>Afi Imports · Invoice #11842</small>
                      </div>
                    </div>
                    {[
                      ["Suya spice blend", "18 cases", "$1,180.00"],
                      ["Dried hibiscus", "6 cases", "$264.00"],
                      ["Smoked paprika", "4 cases", "$112.00"],
                    ].map((row) => (
                      <div className="result-row" key={row[0]}>
                        <span>
                          <Icon name="check" size={14} />
                        </span>
                        <div>
                          <strong>{row[0]}</strong>
                          <small>{row[1]}</small>
                        </div>
                        <b>{row[2]}</b>
                      </div>
                    ))}
                    <button
                      className="primary-wide"
                      onClick={() => {
                        setCaptureOpen(false);
                        notify("Invoice saved — stock levels updated");
                      }}
                    >
                      Confirm and update stock
                    </button>
                  </div>
                ) : (
                  <button
                    className={`scan-zone ${scanStage === "scanning" ? "scanning" : ""}`}
                    onClick={startScan}
                  >
                    <div className="scan-frame">
                      <i />
                      <i />
                      <i />
                      <i />
                      {scanStage === "scanning" ? (
                        <>
                          <span className="scan-line" />
                          <Icon name="search" size={38} />
                        </>
                      ) : (
                        <Icon name="camera" size={42} />
                      )}
                    </div>
                    <h3>
                      {scanStage === "scanning" ? "Reading your invoice…" : "Tap to open camera"}
                    </h3>
                    <p>
                      {scanStage === "scanning"
                        ? "Matching line items to your stock"
                        : "Receipt, invoice, or delivery note"}
                    </p>
                  </button>
                )}
              </div>
            ) : (
              <div className="voice-content">
                <div className="language-toggle">
                  <button
                    className={language === "EN" ? "active" : ""}
                    onClick={() => setLanguage("EN")}
                  >
                    English
                  </button>
                  <button
                    className={language === "ES" ? "active" : ""}
                    onClick={() => setLanguage("ES")}
                  >
                    Español
                  </button>
                </div>
                <button
                  className={`mic-button ${listening ? "listening" : ""}`}
                  onClick={toggleListening}
                >
                  <span>
                    <Icon name="mic" size={32} />
                  </span>
                  {listening && <i />}
                </button>
                <h3>
                  {listening
                    ? language === "EN"
                      ? "I’m listening…"
                      : "Te escucho…"
                    : language === "EN"
                      ? "Tap and speak naturally"
                      : "Toca y habla naturalmente"}
                </h3>
                <p>
                  {listening
                    ? language === "EN"
                      ? "“Added five cases of oat milk…”"
                      : "“Añadí tres sacos de harina…”"
                    : language === "EN"
                      ? "Try “I have eight bags of rice left.”"
                      : "Prueba “Me quedan ocho bolsas de arroz.”"}
                </p>
                {listening && (
                  <div className="wave">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <i key={i} style={{ height: `${12 + ((i * 17) % 34)}px` }} />
                    ))}
                  </div>
                )}
              </div>
            )}
            <p className="privacy-note">
              Your images and voice are processed securely and never used for advertising.
            </p>
          </section>
        </div>
      )}

      {scenarioOpen && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => event.target === event.currentTarget && setScenarioOpen(false)}
        >
          <section
            className="agent-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Supply issue"
          >
            <div className="agent-modal-head">
              <div>
                <span>Live order exception</span>
                <h2>
                  {scenarioStage === "approved"
                    ? "Backup order sent."
                    : scenarioStage === "reversed"
                      ? "Action reversed."
                      : "Your supplier is out of stock."}
                </h2>
                <p>
                  {displayOrders[displayOrders.length - 1]?.vendor} cannot fill today’s{" "}
                  {displayOrders[displayOrders.length - 1]?.label.toLowerCase()} order. Without a
                  replacement, stock runs out before the next rush.
                </p>
              </div>
              <button onClick={() => setScenarioOpen(false)} aria-label="Close">
                <Icon name="x" />
              </button>
            </div>

            {scenarioStage === "idle" && (
              <>
                <div className="issue-summary">
                  <div>
                    <span>At risk</span>
                    <strong>$310</strong>
                    <small>estimated lost dinner sales</small>
                  </div>
                  <div>
                    <span>Stock left</span>
                    <strong>9 hours</strong>
                    <small>at today’s sales pace</small>
                  </div>
                  <div>
                    <span>Current order</span>
                    <strong>
                      ${displayOrders[displayOrders.length - 1]?.price.toLocaleString()}
                    </strong>
                    <small>
                      {displayOrders[displayOrders.length - 1]?.displayQty}{" "}
                      {displayOrders[displayOrders.length - 1]?.unit}, unavailable
                    </small>
                  </div>
                </div>
                <div className="agent-callout">
                  <h3>Let mise find a safe replacement</h3>
                  <p>
                    It will check nearby suppliers, delivery timing, and your payroll reserve.
                    Nothing changes until you approve it.
                  </p>
                  <button className="page-primary" onClick={investigateSupplyIssue}>
                    Find a replacement
                  </button>
                </div>
              </>
            )}

            {scenarioStage === "investigating" && (
              <div className="agent-working">
                <span className="agent-spinner" />
                <h3>Checking suppliers and cash impact…</h3>
                <p>Comparing availability, delivery windows, and total cost.</p>
              </div>
            )}

            {scenarioStage === "ready" && (
              <>
                <div className="recommendation">
                  <div className="recommendation-top">
                    <span>Recommended replacement</span>
                    <b>Available now</b>
                  </div>
                  <h3>{backupVendor}</h3>
                  <p>
                    12 crates delivered today by 4 PM. The order costs $42 more, stays below your
                    cash alert, and avoids an estimated $310 in lost sales.
                  </p>
                  <div className="recommendation-math">
                    <span>
                      Original order{" "}
                      <b>${displayOrders[displayOrders.length - 1]?.price.toLocaleString()}</b>
                    </span>
                    <span>
                      Added cost <b>+$42</b>
                    </span>
                    <span>
                      Sales protected <b>$310</b>
                    </span>
                  </div>
                </div>
                <div className="approval-note">
                  <Icon name="check" size={16} />
                  <span>No action has been taken. You have final approval.</span>
                </div>
                <div className="agent-buttons">
                  <button className="agent-secondary" onClick={() => setScenarioOpen(false)}>
                    Keep original draft
                  </button>
                  <button className="page-primary" onClick={approveAgentAction}>
                    Approve and send PO
                  </button>
                </div>
              </>
            )}

            {(scenarioStage === "approved" || scenarioStage === "reversed") && (
              <>
                <div className={`action-status ${scenarioStage}`}>
                  <span>
                    <Icon name={scenarioStage === "approved" ? "check" : "undo"} />
                  </span>
                  <div>
                    <h3>
                      {scenarioStage === "approved"
                        ? "Owner approved · PO-1042 sent"
                        : "Owner reversed · original restored"}
                    </h3>
                    <p>
                      {scenarioStage === "approved"
                        ? "The live order record, supplier, delivery time, and cash forecast are updated."
                        : "No supplier order will be duplicated. The activity remains in the audit trail."}
                    </p>
                  </div>
                </div>
                <div className="agent-log">
                  <h3>Action log</h3>
                  {agentActions.map((action) => (
                    <div key={action}>
                      <Icon name="check" size={14} />
                      <span>{action}</span>
                      <time>Now</time>
                    </div>
                  ))}
                </div>
                <div className="value-proof">
                  <div>
                    <span>Value protected today</span>
                    <strong>$343</strong>
                    <small>$310 sales + $75 rush fee − $42 added cost</small>
                  </div>
                  <div>
                    <span>Typical weekly return</span>
                    <strong>$411</strong>
                    <small>$343 + 3.2 hrs × $25 − $12 weekly plan cost</small>
                  </div>
                  <div>
                    <span>mise plan</span>
                    <strong>$49/mo</strong>
                    <small>Cancel any time</small>
                  </div>
                </div>
                <div className="agent-buttons">
                  {scenarioStage === "approved" ? (
                    <button
                      className="agent-secondary danger"
                      onClick={reverseAgentAction}
                      style={{
                        background: "#c6433d",
                        borderColor: "#c6433d",
                        color: "#ffffff",
                        fontSize: 13,
                      }}
                    >
                      Reverse agent action
                    </button>
                  ) : (
                    <button className="agent-secondary" onClick={investigateSupplyIssue}>
                      Run again
                    </button>
                  )}
                  <button className="page-primary" onClick={() => setScenarioOpen(false)}>
                    Done
                  </button>
                </div>
              </>
            )}
          </section>
        </div>
      )}

      {toast && (
        <div className="toast">
          <span>
            <Icon name="check" size={16} />
          </span>
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
