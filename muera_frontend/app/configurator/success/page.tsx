"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const userSessionId = searchParams.get("userSessionId");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userSessionId) {
      setLoading(false);
      return;
    }

    const fetchDetails = async () => {
      try {
        const res = await fetch('/api/configurator/details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userSessionId }),
        });
        
        const result = await res.json();
        
        if (result.status === 1000) {
          setData(result.data);
        } else {
          setError(result.message || "Failed to fetch details.");
        }
      } catch (err) {
        setError("An error occurred while fetching details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [userSessionId]);

  if (loading) {
    return <div style={{ padding: "4rem", textAlign: "center" }}>Loading your configuration...</div>;
  }

  if (error || !userSessionId) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h2>We couldn't retrieve your configuration</h2>
        <p>{error || "No session ID provided."}</p>
        <Link href="/configurator" className="btn btn--outline" style={{ marginTop: "1rem" }}>
          Try Again
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "4rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", marginBottom: "2rem" }}>
        Configuration Complete
      </h1>
      
      {data && (
        <div style={{ background: "white", padding: "2rem", borderRadius: "8px", color: "#333" }}>
          <h2>{data.apparelName}</h2>
          <p><strong>SKU:</strong> {data.sku}</p>
          
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Pieces</h3>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {data.pieces?.map((piece: any, idx: number) => (
            <div key={idx} style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #eaeaea" }}>
              <h4>{piece.pieceName}</h4>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {piece.image && <img src={piece.image} alt={piece.pieceName} style={{ maxWidth: "200px" }} />}
              <p><strong>Fabric:</strong> {piece.fabrics?.fabricName}</p>
              
              <h5 style={{ marginTop: "1rem" }}>Style Choices</h5>
              <ul style={{ paddingLeft: "1.5rem" }}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {piece.styleChoices?.map((choice: any, cIdx: number) => (
                  <li key={cIdx}>{choice.attributeName}: {choice.styleName}</li>
                ))}
              </ul>
              
              <h5 style={{ marginTop: "1rem" }}>Measurements</h5>
              <ul style={{ paddingLeft: "1.5rem" }}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {piece.measurements?.map((measure: any, mIdx: number) => (
                  <li key={mIdx}>{measure.displayName}: {measure.valueIncm} / {measure.valueIninch}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <Link href="/cart" className="btn btn--primary">
              Add to Cart
            </Link>
            <Link href="/configurator" className="btn btn--outline-dark">
              Configure Another
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ConfiguratorSuccessPage() {
  return (
    <main style={{ paddingTop: "80px", backgroundColor: "var(--color-off-white)", minHeight: "100vh" }}>
      <div className="container">
        <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center" }}>Loading...</div>}>
          <SuccessContent />
        </Suspense>
      </div>
    </main>
  );
}
