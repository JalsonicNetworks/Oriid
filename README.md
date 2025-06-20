# Oriid – Ultra-Fast, Collision-Free Unique ID Generator

**Oriid** is a blazing-fast, high-throughput JavaScript library for generating **unique, 10-character alphanumeric IDs** at a rate of **20 million+ per second**, using only the characters `a-z`, `A-Z`, and `0-9`.

---

## 🔥 Why Oriid?

Traditional ID generators like MongoDB’s ObjectId or MySQL’s AUTO_INCREMENT come with limitations:

| Feature                  | Oriid       | MongoDB ObjectId | MySQL Auto ID |
|--------------------------|-------------|------------------|----------------|
| Custom length            | ✅ Yes (10+) | ❌ Fixed (24 hex) | ❌ Fixed-size integers |
| URL-safe / Alphanumeric  | ✅ Yes       | ❌ Hex only       | ❌ Numeric only |
| High throughput          | ✅ 20M/sec+  | ⚠️ Limited        | ⚠️ Risk of lock contention |
| No DB dependency         | ✅ Yes       | ❌ Tied to MongoDB| ❌ Tied to RDBMS |
| Collision resistant      | ✅ Yes       | ✅ Yes            | ❌ Needs locking |
| Sortable (time-based)    | ✅ Optional  | ✅ Yes            | ✅ Yes |
| Works offline            | ✅ Yes       | ❌ No             | ❌ No |
| Distributed-safe         | ✅ Yes       | ⚠️ Needs config   | ❌ Hard to scale |

---

## ✅ Key Benefits

- **10+ character compact IDs**
- **Base62 encoding** (a–z, A–Z, 0–9)
- **No external dependencies**
- **No collisions**, even under extreme load
- **Perfect for distributed systems**
- **Fast enough for real-time analytics, logs, and microservices**


