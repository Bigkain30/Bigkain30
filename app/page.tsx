"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown, Copy, Search, ShieldCheck, Zap } from "lucide-react"

const blocks = [
  { height: "2,847,391", hash: "8f3a...c91d", time: "12 sec ago", tx: "1,842", reward: "6.25 LTC" },
  { height: "2,847,390", hash: "44bd...0a72", time: "2 min ago", tx: "2,106", reward: "6.25 LTC" },
  { height: "2,847,389", hash: "c212...ef10", time: "4 min ago", tx: "1,507", reward: "6.25 LTC" },
]

export default function Home() {
  const [query, setQuery] = useState("")
  const [searched, setSearched] = useState(false)
  const [copied, setCopied] = useState(false)
  const search = () => { if (query.trim()) setSearched(true) }
  const copyHash = async () => { await navigator.clipboard?.writeText("8f3a5de1c91d"); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return <main>
    <nav className="nav"><div className="brand"><span className="brand-mark">B</span><span>BIGKAIN</span><span className="brand-sub">/ NETWORK</span></div><div className="nav-links"><a href="#blocks">Blocks</a><a href="#about">Network</a><button className="network">Litecoin mainnet <ChevronDown size={15}/></button></div></nav>
    <section className="hero">
      <div className="eyebrow"><span className="pulse"/> LIVE NETWORK DATA <span className="mono">· 02:41:08 UTC</span></div>
      <h1>Every block.<br/><em>In plain sight.</em></h1>
      <p className="hero-copy">A quiet, exact window into the Litecoin network. Search an address, transaction, or block and see what&apos;s moving.</p>
      <div className="search-wrap"><Search size={21}/><input value={query} onChange={e => {setQuery(e.target.value); setSearched(false)}} onKeyDown={e => e.key === "Enter" && search()} placeholder="Search address, transaction or block" aria-label="Search address, transaction or block"/><button onClick={search}>Explore <ArrowUpRight size={17}/></button></div>
      {searched && <div className="search-result">Showing latest network match for <span className="mono">{query}</span><span>→</span></div>}
      <div className="stats"><div><span className="stat-label">NETWORK HEIGHT</span><strong>2,847,391</strong><span className="positive">+1 block</span></div><div><span className="stat-label">HASHRATE</span><strong>1.18 PH/s</strong><span className="positive">+4.2%</span></div><div><span className="stat-label">NEXT HALVING</span><strong>286 days</strong><span className="muted">at block 3,150,000</span></div></div>
    </section>
    <section className="dashboard" id="blocks"><div className="section-head"><div><div className="eyebrow">THE LEDGER <span className="mono">/ 01</span></div><h2>Recent blocks</h2></div><a href="#blocks">View all blocks <ArrowUpRight size={16}/></a></div><div className="block-list">{blocks.map((block, i) => <article className="block-row" key={block.height}><div className="block-number"><span className="block-icon">{i === 0 ? <Zap size={16}/> : <span>◈</span>}</span><div><span className="row-label">BLOCK</span><strong>{block.height}</strong></div></div><div><span className="row-label">HASH</span><button className="hash" onClick={copyHash}>{block.hash} <Copy size={13}/></button></div><div><span className="row-label">TRANSACTIONS</span><strong>{block.tx}</strong></div><div><span className="row-label">REWARD</span><strong>{block.reward}</strong></div><div className="time">{block.time}</div></article>)}</div></section>
    <section className="signal" id="about"><div className="signal-mark"><ShieldCheck size={34}/></div><div><div className="eyebrow">BUILT FOR CLARITY</div><h2>Trust the signal.</h2><p>BigKain turns Litecoin&apos;s raw public data into a calm, readable surface. No noise. No guesswork. Just the chain, as it happens.</p></div><div className="signal-stat"><strong>100%</strong><span>OPEN DATA</span></div></section>
    <footer><span>© 2026 BIGKAIN NETWORK</span><span className="mono">LTC / USD 72.41</span><span>POWERED BY LITECOIN <ArrowUpRight size={14}/></span></footer>
    {copied && <div className="toast">Hash copied to clipboard</div>}
  </main>
}
